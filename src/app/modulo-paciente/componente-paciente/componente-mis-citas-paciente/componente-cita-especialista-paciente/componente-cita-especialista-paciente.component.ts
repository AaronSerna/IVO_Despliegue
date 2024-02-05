import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute aquí

@Component({
  selector: 'app-componente-cita-especialista-paciente',
  templateUrl: './componente-cita-especialista-paciente.component.html',
  styleUrls: ['./componente-cita-especialista-paciente.component.css'],
})
export class ComponenteCitaEspecialistaPacienteComponent {
  nombreDoctor: string = ''; // Asegúrate de inicializarlo según el tipo de dato
  //fechaCita: string = ''; // Asegúrate de inicializarlo según el tipo de dato
 // horaCita: string = '';
  mostrarPopUps: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el valor del parámetro 'nombreMedico' de la URL
    this.route.queryParams.subscribe((params) => {
      this.nombreDoctor = params['nombreMedico'] || '';
     // this.fechaCita = params['fechaCita'] || '';
    //  this.horaCita = params['horaCita'] || '';
    });
  }

  // Alterna la visibilidad de las imágenes en forma de pop-up.
  togglePopUps() {
    this.mostrarPopUps = !this.mostrarPopUps;
  }

  cerrarPopUps() {
    this.mostrarPopUps = false;
  }
}

