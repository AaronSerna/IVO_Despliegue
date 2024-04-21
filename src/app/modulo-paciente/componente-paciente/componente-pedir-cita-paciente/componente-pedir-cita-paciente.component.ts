import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServicioPedirCitaService } from '../../../services/servicio-pedir-cita/servicio-pedir-cita.service';
@Component({
  selector: 'app-componente-pedir-cita-paciente',
  templateUrl: './componente-pedir-cita-paciente.component.html',
  styleUrls: ['./componente-pedir-cita-paciente.component.css'],
})
export class ComponentePedirCitaPacienteComponent {
  tipoCitaSeleccionada: string = '';

  constructor(
    private router: Router,
    private pedirCitaService: ServicioPedirCitaService
  ) {}

  guardarDatosPaso1() {
    this.pedirCitaService.tipoCita = this.tipoCitaSeleccionada;
  }

  continuarAlPaso2() {
    this.guardarDatosPaso1();
    this.router.navigate(['/paciente/pedirCita/pedirCitaPaso2']);
  }
}
