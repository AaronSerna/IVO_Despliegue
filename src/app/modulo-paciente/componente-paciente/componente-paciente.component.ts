import { Component } from '@angular/core';
import { CitasService } from '../../services/servicio-citas/citas.service';
import { AuthService } from '../../services/servicio-auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-paciente',
  templateUrl: './componente-paciente.component.html',
  styleUrls: ['./componente-paciente.component.css'],
})
export class ComponentePacienteComponent {
  idPaciente: number | null = null; // Al almacenar un dato de una suscripción en una variable, Angular dice que el dato recibido podría ser null.
  mostrarModal = false;

  constructor(
    private citasService: CitasService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.obtenerUsuarioId().subscribe((id) => {
      if (id !== null) {
        this.idPaciente = id; // Si el dato recibido no es null, guardamos el id del paciente.
      }
    });
  }

  comprobarCitaActiva() {
    if (this.idPaciente !== null) {
      this.citasService
        .comprobarCitaActiva(this.idPaciente)
        .subscribe((data: any) => {
          if (data && data.estado === 'EN_CURSO') {
            // Si el endpoint devuelve datos y la cita está activa, mostrar el modal.
            this.mostrarModal = true;
          } else {
            // Si no hay cita activa, redirigir a /paciente/pedirCita.
            this.router.navigate(['paciente/pedirCita']);
          }
        });
    }
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
