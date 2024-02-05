import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-tabla-pacientes-medico',
  templateUrl: './componente-tabla-pacientes-medico.component.html',
  styleUrls: ['./componente-tabla-pacientes-medico.component.css'],
})
export class ComponenteTablaPacientesMedicoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        url: 'http://127.0.0.1:8000/api/v1/pacientes',
        dataSrc: '',
      },
      columns: [ // Llenamos el datatable con el nombre y los datos de la tabla de la BD.
        { title: 'Nombre', data: 'nombre' },
        { title: '1er Apellido', data: 'apellido_1', orderable: false },
        { title: '2ndo Apellido', data: 'apellido_2', orderable: false },
        { title: 'Hora', data: 'hora' },
        { title: 'NIP', data: 'nip', orderable: false },
        {
          title: '',
          data: null,
          orderable: false,
          render: function (data: any, type: any, full: any) {
            return (
              '<div class="d-flex justify-content-evenly"><a href="http://"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>' +
              '<a href="http://localhost:4200/medico/citas"><img src="../../../../../assets/images/ImagenesMedico/editarCitaMedico.svg" alt=""></a>' +
              '<a href=""><img src="../../../../../assets/images/ImagenesMedico/cruz_cancelar_medico.svg" alt=""></a></div>'
            );
          },
        },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }
}
