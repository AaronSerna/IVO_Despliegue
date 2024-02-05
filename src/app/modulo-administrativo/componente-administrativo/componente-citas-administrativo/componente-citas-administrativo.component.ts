import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-citas-administrativo',
  templateUrl: './componente-citas-administrativo.component.html',
  styleUrls: ['./componente-citas-administrativo.component.css'],
})
export class ComponenteCitasAdministrativoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      ajax: 'http://localhost:443/ejercicioBlog/public/api/v1/posts',

      columns: [
        { title: 'id', data: 'id' },
        { title: 'Titulo', data: 'title' },
        { title: 'Slug', data: 'slug' },
        { title: 'Contenido', data: 'content' },
        { title: 'Fecha', data: 'datePub' },
        {
          title: '',
          data: null,
          orderable: false,
          render: function (data: any, type: any, full: any) {
            // AQUI SE GUARDA EL ID Y EL TITLE
            var id = full.id;
            var title = full.title;

            // DIV PARA LOS ICONOS
            return (
              '<div class="d-flex justify-content-evenly">' +
              //'<a href="http://localhost:4200/administrativo/modificarCita' + id + '&title=' + title + '"><img src="../../../../../assets/images/ImagenesAdministrativo/editar.svg" alt=""></a>' +
              '<a href="http://localhost:4200/administrativo/modificarCita"><img class="custom-imagen-1" src="../../../../../assets/images/ImagenesAdministrativo/editar.svg" alt=""></a>' +
              '<a href="http://localhost:4200/administrativo/eliminarCita"><img class="custom-imagen-2" src="../../../../../assets/images/ImagenesAdministrativo/papelera.svg" alt=""></a>'
            );
          },
        },
      ],

      //EN LA PROPIEDAD LANGUAGE LLAMAMOS A LA URL LA CUAL ES UN CDN DE LA TRADUCCION DE LA TABLA EN ESPAÑOL
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }
}
