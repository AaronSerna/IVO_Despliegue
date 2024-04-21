import { Component } from '@angular/core';
import { AuthService } from '../../../services/servicio-auth/auth.service';
import { Router } from '@angular/router';
import { ServicioPedirCitaService } from '../../../services/servicio-pedir-cita/servicio-pedir-cita.service';
import { UsuariosService } from '../../../services/servicio-usuarios/usuarios.service';

@Component({
  selector: 'app-componente-gestionar-agenda-paso-dos-medico',
  templateUrl: './componente-gestionar-agenda-paso-dos-medico.component.html',
  styleUrls: ['./componente-gestionar-agenda-paso-dos-medico.component.css']
})
export class ComponenteGestionarAgendaPasoDosMedicoComponent {

  idMedico: number = 0;
  rangoFechas: string = '';
  arrayAgendaMedico: any = [];

  constructor(
    private pedirCitaService: ServicioPedirCitaService,
    private router: Router,
    private usuariosService: UsuariosService,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    this.rangoFechas = this.pedirCitaService.rangoFechas;

    this.authService.obtenerUsuarioId().subscribe((id) => {
      if (id !== null) { // Nos aseguramos que id no sea null   
        this.idMedico = id;
        this.guardarAgendaMedicoBD(this.idMedico);
      }
    });
  }

  guardarAgendaMedicoBD(idMedico: number) {
    this.usuariosService
      .mostrarAgendaMedico(idMedico)
      .subscribe((response) => {
        this.arrayAgendaMedico = response; // Almacenamos en una variable la agenda del médico de la BD.

        this.arrayAgendaMedico.diasLibres.push(this.rangoFechas);
      });
  }

  actualizarAgendaMedico() {
    this.usuariosService.actualizarAgendaMedico(this.idMedico, this.arrayAgendaMedico).subscribe((response) => { // Mandamos en el body los datos al endpoint.
      this.router.navigate(['medico/gestionarAgenda/confirmacion']);
    });
  }

}
