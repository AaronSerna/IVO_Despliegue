import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPedirCitaService } from '../../../../services/servicio-pedir-cita/servicio-pedir-cita.service';
import { UsuariosService } from '../../../../services/servicio-usuarios/usuarios.service';

@Component({
  selector: 'app-componente-pedir-cita-paso-dos',
  templateUrl: './componente-pedir-cita-paso-dos.component.html',
  styleUrls: ['./componente-pedir-cita-paso-dos.component.css'],
})

export class ComponentePedirCitaPasoDosComponent {
  tipoCita: string = '';
  medicoSeleccionado: string = '';
  agendaMedico: string = '';
  medicos: any[] = []; // Almacenamos en un array todos los médicos obtenidos del endpoint.

  constructor(
    private pedirCitaService: ServicioPedirCitaService,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    // Guardamos el valor del paso 1.
    this.tipoCita = this.pedirCitaService.tipoCita;
    this.obtenerMedicos();
  }

  obtenerMedicos() {
    this.usuariosService.mostrarMedicos().subscribe((response) => {
      this.medicos = response.usuarios;
    });
  }

  guardarDatosPaso2() {
    // Obtener el médico seleccionado
    let medicoSeleccionado = this.medicos.find((medico) => medico.id_medico === this.medicoSeleccionado);

    if (medicoSeleccionado) {

      this.pedirCitaService.medicoSeleccionado = medicoSeleccionado.id_medico;
      this.pedirCitaService.nombreMedicoSeleccionado = medicoSeleccionado.nombre_completo;
      this.pedirCitaService.agendaMedico = medicoSeleccionado.agenda || '';
    }
  }

  continuarAlPaso3() {
    this.guardarDatosPaso2();
    this.router.navigate(['/paciente/pedirCita/pedirCitaPaso3']);
  }

}
