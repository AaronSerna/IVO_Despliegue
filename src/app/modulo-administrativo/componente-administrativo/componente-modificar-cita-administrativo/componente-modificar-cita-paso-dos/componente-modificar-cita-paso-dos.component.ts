import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-componente-modificar-cita-paso-dos',
  templateUrl: './componente-modificar-cita-paso-dos.component.html',
  styleUrls: ['./componente-modificar-cita-paso-dos.component.css'],
})
export class ComponenteModificarCitaPasoDosComponent {
  @Input() rutaBotonSi: string = '';
  @Input() rutaBotonCancelar: string = '';

  idCita: string = '';
  nombrePaciente: string = '';
  fecha: string = '';
  hora: string = '';
  idRadiologo: string = '';

  constructor(
    private route: ActivatedRoute,
    private citasService: CitasService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(
      this.idCita,
      this.nombrePaciente,
      this.fecha,
      this.hora,
      this.idRadiologo
    );

    this.route.queryParams.subscribe((params) => {
      // Almacenamos los datos recibidos de la URL.
      this.idCita = decodeURIComponent(params['idCita']);
      this.nombrePaciente = decodeURIComponent(params['nombrePaciente']);
      this.fecha = decodeURIComponent(params['fecha']);
      this.hora = decodeURIComponent(params['hora']);
      this.idRadiologo = params['idRadiologo'];
    });
  }

  actualizarCita() {
    const datosActualizados = {
      fecha: this.fecha,
      hora: this.hora,
      idRadiologo: this.idRadiologo,
    };
    this.citasService
      .updateCita(this.idCita, datosActualizados)
      .pipe(
        tap((data: any) => {
          this.router.navigate([
            'administrativo/modificarCita/confirmacionModificarCita',
          ]); // Navegar a la página de confirmación
        })
      )
      .subscribe((response) => {
        console.log('Cita actualizada:', response);
      });
  }
}
