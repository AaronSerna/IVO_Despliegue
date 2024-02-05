import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css'],
})
export class ComponenteHistorialPacienteComponent implements OnInit, OnDestroy {
  tipoMedico: string = 'authors'; // Valor predeterminado
  dtOptions: DataTables.Settings = {};
  dataTable: any;

  constructor(private el: ElementRef, private http: HttpClient) {}

  // Si el valor del select cambia, destruimos y volvemos a iniciar el datatable con otra llamada a la API.
  onTipoMedicoChange() {
    this.destroyDataTable(); // Destruir el DataTables si ya está inicializado con los valores de facultativo o radiólogo.
    this.initDataTable(); // Volver a inicializar el DataTables con la nueva URL
  }

  ngOnInit() {
    this.initDataTable();
  }

  ngOnDestroy(): void {
    // Destruir el DataTables al destruir el componente para evitar posibles fugas de memoria
    this.destroyDataTable();
  }

  initDataTable() {
    // Configuración de DataTables
    this.dtOptions = {
      scrollY: '260px',
      info: false,
      destroy: true, // Agregar esta opción para destruir la tabla antes de reinicializar
      ajax: (dataTablesParameters: any, callback: any) => {
        this.http
          .get(
            `http://localhost/PrimerProyectoLaravel/public/api/v1/${this.tipoMedico}`
          )
          .subscribe((data: any) => {
            callback({
              recordsTotal: data.length,
              recordsFiltered: data.length,
              data: data,
            });
          });
      },
      columns: [
        { title: 'Tipo de cita', data: 'id' },
        { title: 'Médico', data: 'name' },
        { title: 'Fecha', data: 'created_at' },
        { title: 'Hora', data: 'updated_at' },
        { title: 'Hora', data: 'updated_at' },

        {
          title: '',
          data: 'null',

          orderable: false,
          render: function (data: any, type: any, full: any) {
            var idCita = full.id;
            var nombreDoctor = full.name;
            var fechaCita = full.created_at;
            var horaCita = full.updated_at;
            return (
            '<div class="d-flex flex-row">' +               
              `<a href="http://localhost:4200/paciente/misCitas/citaEspecialista?id=${idCita}&nombreMedico=${nombreDoctor}&fecha=${fechaCita}&hora=${horaCita}"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>` +
              `<a href="http://localhost:4200/paciente/misCitas?id=${idCita}&nombreMedico=${nombreDoctor}&fecha=${fechaCita}&hora=${horaCita}"><img src="../../../../../assets/images/ImagenesGenerales/papelera.svg"  class="papelera" alt=""></a>`+
              '</div>'
              );
          },
        },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };

    // Inicializar el DataTables con la nueva configuración
    this.dataTable = $(this.el.nativeElement)
      .find('table')
      .DataTable(this.dtOptions);
  }

  destroyDataTable() {
    // Destruir el DataTables si ya está inicializado
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }
}
