import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router'; // Asegúrate de importar ActivatedRouteSnapshot y RouterStateSnapshot
import { Observable, of } from 'rxjs'; // Importa 'of' desde 'rxjs'
import { CitasService } from '../services/servicio-citas/citas.service'; // Importa el servicio de citas
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitaActivaGuard implements CanActivate {
  idPaciente: number | null = null; // Cambiado a number
  constructor(private router: Router, private citasService: CitasService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const idPacienteString = localStorage.getItem('id');
    if (!idPacienteString) {
      return false; // No hay id de paciente en el localStorage, por lo tanto, el acceso no está permitido
    }

    this.idPaciente = parseInt(idPacienteString, 10);

    if (state.url.includes('confirmacion')) {
      // Si la ruta es 'confirmacion', redirigir después de 2 segundos (2000 ms)
      setTimeout(() => {
        this.verificarCitaActiva();
      }, 2000); // Redirigir después de 2 segundos
      return true; // Permitir acceso inmediato a la ruta 'confirmacion'
    }

    return this.verificarCitaActiva();
  }

  verificarCitaActiva(): Observable<boolean> {
    if (this.idPaciente === null) {
      return of(false);
    }

    return this.citasService.comprobarCitaActiva(this.idPaciente).pipe(
      map((data: any) => {
        if (data && data.estado === 'EN_CURSO') {
          // Si hay una cita activa, redirigir al usuario a la página de inicio
          this.router.navigate(['/paciente']);
          return false;
        }
        return true; // Si no hay cita activa, permitir el acceso a la ruta
      })
    );
  }
}

//TODO:  ANALIZAR EL CODIGO DE ARRIBA OTRO DÍA

/* CODIGO ORIGINAL, EL OTRO ES MUY CHATGPT.
export class CitaActivaGuard implements CanActivate {
  idPaciente: number | null = null; // Cambiado a number
  constructor(private router: Router, private citasService: CitasService) {}

  canActivate(): Observable<boolean> | boolean {
    const idPacienteString = localStorage.getItem('id');
    if (!idPacienteString) {
      return false; // No hay id de paciente en el localStorage, por lo tanto, el acceso no está permitido
    }

    this.idPaciente = parseInt(idPacienteString, 10); 
    return this.citasService.comprobarCitaActiva(this.idPaciente).pipe(
      map((data: any) => {
        if (data && data.estado === 'EN_CURSO') {
          // Si hay una cita activa, no permitir el acceso y redirigir al usuario
          this.router.navigate(['/paciente']); 
          return false;
        }
        return true; // Si no hay cita activa, permitir el acceso a la ruta
      })
    );
  }
}
*/
