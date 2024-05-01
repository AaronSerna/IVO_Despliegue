import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL PACIENTE:

  mostrarCitasDelPaciente(pacienteId: number): Observable<any> {
    return this.http.get(
     // `http://localhost/ivo_backend/public/api/citas/mostrarCitasDelPaciente/${pacienteId}`
      `https://ivobackend.online/api/citas/mostrarCitasDelPaciente/${pacienteId}`
    );
  }

  mostrarDiagnosticoDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
     // `http://localhost/ivo_backend/public/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
       `https://ivobackend.online/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
    );
  }

  mostrarInformeDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
     // `http://localhost/ivo_backend/public/api/informes/mostrarInformeDelPaciente/${idCita}`
       `https://ivobackend.online/api/informes/mostrarInformeDelPaciente/${idCita}`
    );
  }

  cancelarCita(numCita: string): Observable<any> {
    return this.http.get(
      `https://ivobackend.online/api/citas/cancelarCita/${numCita}`
    //  `http://localhost/ivo_backend/public/api/citas/cancelarCita/${numCita}`
    );
  }

  comprobarCitaActiva(idPaciente: number): Observable<any> {
    return this.http.get(
      //`https://ivobackend/api/citas/cancelarCita/${numCita}`
      `http://localhost/ivo_backend/public/api/citas/comprobarCitaActiva/${idPaciente}`
    );
  }

  comprobarCitasDisponibles(idMedico: string): Observable<any> { // Endpoint para generar citas/eventos de las citas disponibles.
    return this.http.get(
    // `http://localhost/ivo_backend/public/api/citas/comprobarCitasDisponibles/${idMedico}`
       `https://ivobackend.online/api/citas/comprobarCitasDisponibles/${idMedico}`

    );
  }

  pedirCita(datosInsertados: any): Observable<any> {
   // const url = `http://localhost/ivo_backend/public/api/citas/guardar`;
    const url = `https://ivobackend.online/api/citas/guardar`;
    return this.http.post(url, datosInsertados);
  }
  // ENDPOINTS DEL RADIÓLOGO:

  comprobarNumeroDeCita(): Observable<any> {
    return this.http.get(
      // `http://localhost/ivo_backend/public/api/citas/comprobarNumCita`
      `https://ivobackend.online/api/citas/comprobarNumCita`
    );
  }

  cumplirCita(numCita: number): Observable<any> {
    let url = `https://ivobackend.online/api/citas/cumplirCita/${numCita}`;
    // let url = `http://localhost/ivo_backend/public/api/citas/cumplirCita/${numCita}`;

    return this.http.post(url, null);
  }

  // ENDPOINTS DEL ADMINISTRATIVO:

  mostrarCitasDelDia(): Observable<any> {
    // Obtén el token almacenado en localStorage
    const token = localStorage.getItem('token_usuario');

    // Verifica si hay un token antes de hacer la solicitud
    if (token) {
      // Configura los encabezados con el token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      // Realiza la solicitud HTTP incluyendo los encabezados
      return this.http.get(
        //'http://localhost/ivo_backend/public/api/citas/mostrarCitasDelDia',
        'https://ivobackend.online/api/citas/mostrarCitasDelDia',
        { headers }
      );
    } else {
      // Manejar el caso en el que no haya token disponible
      console.error('Token no disponible.');
      // Puedes devolver un Observable con un error u otra lógica según tu necesidad.
      return new Observable();
    }
  }

  updateCita(idCita: string, datosActualizados: any): Observable<any> {
    // const url = `http://localhost/ivo_backend/public/api/citas/actualizar/${idCita}`;
    const url = `https://ivobackend.online/api/citas/actualizar/${idCita}`;

    return this.http.put(url, datosActualizados);
  }

  // ENDPOINTS DEL MEDICO:
  mostrarCitasMedico(id_medico: number): Observable<any> {
    return this.http.get(
        `https://ivobackend.online/api/citas/mostrarCitasMedico/${id_medico}`
     // `http://localhost/ivo_backend/public/api/citas/mostrarCitasMedico/${id_medico}`
    );
  }

  crearCitaRadiologica(datosInsertados: any): Observable<any> {
    //  const url = `http://localhost/ivo_backend/public/api/citas/guardar`;
    const url = `https://ivobackend.online/api/citas/guardar`;
    return this.http.post(url, datosInsertados);
  }
}
