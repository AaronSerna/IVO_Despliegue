import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { AuthService } from '../../../../services/servicio-auth/auth.service';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css'],
})
export class ComponenteHistorialPacienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dataTable: any;
  idPaciente: number | null = null; // Al almacenar un dato de una suscripción en una variable, Angular dice que el dato recibido podría ser null.
  constructor(
    private citasService: CitasService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initDataTable();

    this.authService.obtenerUsuarioId().subscribe((id) => {
      if (id !== null) {
        this.idPaciente = id; // Si el dato recibido no es null, guardamos el id del paciente.
      }
    });
  }

  initDataTable() {
    // Configuración de DataTables
    this.dtOptions = {
      scrollY: '260px',
      info: false,
      responsive: true,
      createdRow: (
        row: Node | HTMLTableRowElement,
        data: any,
        dataIndex: number
      ) => {
        if (data.estado === 'CANCELADA') {
          (row as HTMLTableRowElement).classList.add('citaCancelada');
        } else if (data.estado === 'CUMPLIDA') {
          (row as HTMLTableRowElement).classList.add('citaCumplida');
        } else if (data.estado === 'EN_CURSO') {
          (row as HTMLTableRowElement).classList.add('citaEnCurso');
        }
      },

      ajax: (dataTablesParameters: any, callback: any) => {
        // Nos conectamos al servicio/endpoint que creamos:
        if (this.idPaciente != null) {
          this.citasService
            .mostrarCitasDelPaciente(this.idPaciente)
            .subscribe((data: any) => {
              callback({
                data: data,
              });
            });
        }
      },
      columns: [
        { title: 'Nº de cita', data: 'num_cita' },
        { title: 'Tipo de cita', data: 'tipo_cita' },
        {
          title: 'Médico',
          data: null,
          render: function (data: any, type: any, full: any) {
           
            var tipoCita = full.tipo_cita;
            var nombreDoctor = '';

            if (tipoCita === 'Medicina General') {
              nombreDoctor = full.nombre_completo_medico || '';
            } else if (tipoCita === 'Radiologia') {
              nombreDoctor = full.nombre_completo_radiologo || '';
            }

            return nombreDoctor;
          },
        },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Hora', data: 'hora' },
        { title: 'Estado', data: 'estado' },

        {
          title: '',
          data: 'null',

          orderable: false,
          render: function (data: any, type: any, full: any) {
            var numCita = full.num_cita;
            var idCita = full.id;
            var tipoCita = full.tipo_cita;
            var nombreDoctor = '';

            if (tipoCita === 'Medicina General') {
              nombreDoctor = full.nombre_completo_medico || '';
            } else if (tipoCita === 'Radiologia') {
              nombreDoctor = full.nombre_completo_radiologo || '';
            }

            var fechaCita = full.fecha;
            var horaCita = full.hora;

            var abrirCitaUrl = '';
            var papeleraCitaUrl = '';

            if (tipoCita === 'Radiologia') {
              abrirCitaUrl = `/paciente/misCitas/citaEspecialista?id=${idCita}&nombreDoctor=${nombreDoctor}&tipoCita=${tipoCita}&fechaCita=${fechaCita}&horaCita=${horaCita}`;
              papeleraCitaUrl = `/paciente/misCitas/cancelarCita?numCita=${numCita}`;
            } else if (tipoCita === 'Medicina General') {
              abrirCitaUrl = `/paciente/misCitas/citaFacultativo?id=${idCita}&nombreDoctor=${nombreDoctor}&tipoCita=${tipoCita}&fechaCita=${fechaCita}&horaCita=${horaCita}`;
              papeleraCitaUrl = `/paciente/misCitas/cancelarCita?numCita=${numCita}`;
            }

            return (
              '<div class="d-flex flex-row iconos">' +
              `<a href="${abrirCitaUrl}"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>` +
              `<a href="${papeleraCitaUrl}"><img src="../../../../../assets/images/ImagenesGenerales/papelera.svg"  class="papelera" alt=""></a>` +
              '</div>'
            );
          },
        },
      ],
      order: [[3, 'desc']], // Ordenar las fechas por las más recientes.
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }
}
