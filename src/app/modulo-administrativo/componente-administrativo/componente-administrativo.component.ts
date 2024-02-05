/*
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-componente-administrativo',
  templateUrl: './componente-administrativo.component.html',
  styleUrls: ['./componente-administrativo.component.css'],
})
export class ComponenteAdministrativoComponent implements OnInit {
  rutaActiva: string = '';
  @Input() estilosPaso1: any = {};
  @Input() estilosPaso2: any = {};
  @Input() estilosPaso3: any = {};
  @Input() estilosPaso4: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.detectarRuta();
      });
  }

  private detectarRuta(): void {
    const ruta = this.router.url;
    this.rutaActiva = '';

    switch (ruta) {
      case '/administrativo/citas':
        console.log('Estas en la ruta citas del admin');
        this.rutaActiva = 'citas';
        break;

      case '/administrativo/crearPaciente':
        console.log('Estas en la ruta crear paciente del admin');
        this.rutaActiva = 'crearPaciente';
        break;

      case '/administrativo/crearPaciente/crearPacientePaso2':
        console.log('Estas en la ruta crear paciente paso 2 del admin');
        this.rutaActiva = 'crearPacientePaso2';
        break;

      case '/administrativo/crearPaciente/crearPacientePaso3':
        console.log('Estas en la ruta crear paciente paso 3 del admin');
        this.rutaActiva = 'crearPacientePaso3';
        break;

        case '/administrativo/crearPaciente/confirmacionCreacionPaciente':
        console.log('Estas en la ruta confirmacionCreacionPaciente del admin');
        this.rutaActiva = 'confirmacionCreacionPaciente';
        break;

      case '/administrativo/crearCita':
        console.log('Estas en la ruta crear cita del admin');
        this.rutaActiva = 'crearCita';
        break;

      case '/administrativo/crearCita/crearCitaPaso2':
        console.log('Estas en la ruta crear cita paso 2 del admin');
        this.rutaActiva = 'crearCitaPaso2';
        break;

      case '/administrativo/crearCita/crearCitaPaso3':
        console.log('Estas en la ruta crear cita paso 3 del admin');
        this.rutaActiva = 'crearCitaPaso3';
        break;

        case '/administrativo/crearCita/confirmacionCreacionCita':
        console.log('Estas en la ruta confirmacionCreacionCita del admin');
        this.rutaActiva = 'confirmacionCreacionCita';
        break;

        

      case '/administrativo/modificarCita':
        console.log('Estas en la ruta modificarCita del admin');
        this.rutaActiva = 'modificarCita';
        break;

      case '/administrativo/modificarCita/modificarCitaPaso2':
        console.log('Estas en la ruta modificarCitaPasoDos del admin');
        this.rutaActiva = 'modificarCitaPaso2';
        break;

      case '/administrativo/modificarCita/confirmacionModificarCita':
        console.log('Estas en la ruta confirmacionModificarCita del admin');
        this.rutaActiva = 'confirmacionModificarCita';
        break;

        case '/administrativo/eliminarCita':
        console.log('Estas en la ruta eliminarCita del admin');
        this.rutaActiva = 'eliminarCita';
        break;

        case '/administrativo/eliminarCita/confirmacionEliminarCita':
        console.log('Estas en la ruta confirmacionEliminarCita del admin');
        this.rutaActiva = 'confirmacionEliminarCita';
        break;

      default:
        console.log('Estas en una ruta no reconocida del admin');
    }
  }
} */



import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-administrativo',
  templateUrl: './componente-administrativo.component.html',
  styleUrls: ['./componente-administrativo.component.css'],
})
export class ComponenteAdministrativoComponent  {
  @Input() estilosPaso1: any = {};
  @Input() estilosPaso2: any = {};
  @Input() estilosPaso3: any = {};
  @Input() estilosPaso4: any = {};
} 