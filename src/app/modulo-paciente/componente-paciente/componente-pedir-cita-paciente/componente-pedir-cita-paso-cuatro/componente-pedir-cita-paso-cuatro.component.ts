import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPedirCitaService } from '../../../../services/servicio-pedir-cita/servicio-pedir-cita.service';
import { AuthService } from '../../../../services/servicio-auth/auth.service';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { CitaActivaGuard } from "../../../../Guard/cita-activa.guard";

@Component({
  selector: 'app-componente-pedir-cita-paso-cuatro',
  templateUrl: './componente-pedir-cita-paso-cuatro.component.html',
  styleUrls: ['./componente-pedir-cita-paso-cuatro.component.css'],
})

export class ComponentePedirCitaPasoCuatroComponent {
  idPaciente: number | null = null; // Ajustado para manejar null como valor inicial
  id: number = 0; // El id del usuario almacenado en el LocalStorage.
  tipoCita: string = '';
  medicoSeleccionado: string = '';
  nombreMedicoSeleccionado: string = '';
  fechaSeleccionada: string = '';
  horaSeleccionada: string = '';
  numCita: string = '';
  especialidad: number = 1;

  constructor(
    private pedirCitaService: ServicioPedirCitaService,
    private router: Router,
    private authService: AuthService,
    private citas: CitasService,
    private citaActivaGuard: CitaActivaGuard
  ) { }

  ngOnInit() {
    // Almacenamos en variables todos los datos recogidos para mostrarlos.
    this.tipoCita = this.pedirCitaService.tipoCita; 
    this.medicoSeleccionado = this.pedirCitaService.medicoSeleccionado;
    this.nombreMedicoSeleccionado = this.pedirCitaService.nombreMedicoSeleccionado;
    this.fechaSeleccionada = this.pedirCitaService.fechaSeleccionada;
    this.horaSeleccionada = this.pedirCitaService.horaSeleccionada;


    this.authService.obtenerUsuarioId().subscribe((id) => {
      if (id !== null) { // Nos aseguramos que id no sea null.   
        this.idPaciente = id;
      }
    });
  }

  pedirCita() {
    let numRandom = Math.floor(10000 + Math.random() * 90000); // Creamos un num_cita random.
    let letraRandom = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    this.numCita = numRandom.toString() + letraRandom; // Generamos un num_cita de 5 números y una letra.

    let datosAGuardar = {
      num_cita: this.numCita,
      fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada,
      especialidad: 1,
      tipo_cita: 'Medicina General',
      id_paciente: this.idPaciente,
      id_medico: this.medicoSeleccionado,
      estado: 'EN_CURSO',
    };

    // Llamamos al servicio para crear la cita
    this.citas
      .pedirCita(datosAGuardar).subscribe(
        (data: any) => {
          this.router.navigate(['paciente/pedirCita/confirmacion']);
          this.citaActivaGuard.verificarCitaActiva();

        },
        (error) => { // En caso de error, redirigir al componente error.
          this.router.navigate(['paciente/pedirCita/error']);
        }
      );
  }
}
