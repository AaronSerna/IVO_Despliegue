import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from '../../../../services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-caja-blanca-mediana',
  templateUrl: './componente-caja-blanca-mediana.component.html',
  styleUrls: ['./componente-caja-blanca-mediana.component.css'],
})
export class ComponenteCajaBlancaMedianaComponent {
  form: FormGroup; //creamos un formGroup

  id: string = '';
  id_paciente: number=0;
  nombrePaciente: string = '';
  dniPaciente: string = '';
  num_cita: string = '';
  citas: any[] = []; // Array para almacenar los números de cita

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private citasService: CitasService
  ) {
    this.form = this.fb.group({ //se crea un nuevo formGroup
      
      numeroCita: [ //numeroCita es el nombre del formGroup y el valor inicial será un string vacío ''
        '',
        [Validators.pattern(/^\d{5}[a-zA-Z]$/)],
      ], 
    });
  }

  siguiente() {
    if (this.form.valid) { //Si el pattern del formulario es correcto...
      const numCitaInput = this.form.get('numeroCita'); //Obtenemos el número de la cita introducido en el input
      if (numCitaInput && numCitaInput.value) { //si numCitaInput tiene valores, se procede a buscarla
        const cita = this.citas.find((c) => c.num_cita === numCitaInput.value); //Se procede a buscar una cita que coincida con lo introducido en el input
        if (cita) { //si hay cita se adquieren los datos de esa cita
          this.id = cita.id;
          this.nombrePaciente = cita.nombre_completo_paciente;
          this.id_paciente= cita.id_paciente;
          this.dniPaciente = cita.dni_paciente;
          this.num_cita=cita.num_cita;
          this.router.navigate(['radiologo/buscarCita/citas'], {  //mandamos a esta ruta los siguientes parámetros
            queryParams: {
              id: encodeURIComponent(this.id),
              id_paciente: encodeURIComponent(this.id_paciente),
              nombrePaciente: encodeURIComponent(this.nombrePaciente),
              dniPaciente: encodeURIComponent(this.dniPaciente),
              num_cita: encodeURIComponent(this.num_cita),
            },
          });
        } else {
          alert('El número de cita no existe'); //Mensaje de alerta si el número de la cita no existe
        }
      }
    }
  }

  comprobarNumCita() { //En esta función, llama al metodo comprobarNumeroDeCita del servicio citas, el cual ataca al endpoint de la api y realiza su funcionalidad descrita
    this.citasService.comprobarNumeroDeCita().subscribe((data: any) => { 
      this.citas = data.map((cita: any) => ({ //los datos se guardan en su respectivo campo y se mapean
        id: cita.id,
        num_cita: cita.num_cita,
        id_paciente: cita.id_paciente,
        nombre_completo_paciente: cita.nombre_completo_paciente,
        dni_paciente: cita.dni_paciente,
      }));
      this.siguiente(); // Llama a la función siguiente() después de obtener las citas
    });
  }
}