import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  // ENDPOINTS DEL ADMINISTRATIVO:

  buscarPorDni(): Observable<any> {
    return this.http.get('https://ivobackend.online/api/usuarios/buscarPorDni');
  }

  mostrarRadiologos(): Observable<any> {
    return this.http.get(
      'https://ivobackend.online/api/usuarios/mostrarRadiologos'
    );
  }

  // ENDPOINTS DEL MÉDICO:

  mostrarMedicos(): Observable<any> {
    return this.http.get('https://ivobackend.online/api/usuarios/mostrarRadiologos');
    // return this.http.get('http://localhost/ivo_backend/public/api/usuarios/mostrarMedicos');
  }

  mostrarAgendaMedico(idMedico: number): Observable<any> {
    return this.http.get(`https://ivobackend.online/api/medicos/mostrarAgendaMedico//${idMedico}`);
    // return this.http.get(`http://localhost/ivo_backend/public/api/medicos/mostrarAgendaMedico/${idMedico}`);
  }

  actualizarAgendaMedico(idMedico: number, agenda: any): Observable<any> {
    return this.http.post(`https://ivobackend.online/api/medicos/actualizarAgendaMedico`, { id_medico: idMedico, agenda: agenda });
    //  return this.http.post(`http://localhost/ivo_backend/public/api/medicos/actualizarAgendaMedico`, { id_medico: idMedico, agenda: agenda });
  }

  crearUsuarioPaciente(datos: any): Observable<any> {
    // Ajusta la URL según tu configuración
    return this.http.post(//'http://localhost/ivo_backend/public/api/usuarios/crearUsuarioPaciente', //datos
      'https://ivobackend.online/api/usuarios/crearUsuarioPaciente', datos);
  }
}