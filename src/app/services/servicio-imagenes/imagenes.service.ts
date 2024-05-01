import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  constructor(private http: HttpClient) {}

  mostrarImagenesDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      `https://ivobackend.online/api/imagenes/mostrarImagenesDelPaciente/${idCita}`
     //  `http://localhost/ivo_backend/public/api/imagenes/mostrarImagenesDelPaciente/${idCita}`
    );
  }

  guardar(datos: any): Observable<any> {
    // Guardar imágenes radiológicas
    return this.http.post(
      'https://ivobackend.online/api/imagenes/guardar',
      datos
    );
    // return this.http.post(     'http://localhost/ivo_backend/public/api/imagenes/guardar',     datos    );
  }
}
