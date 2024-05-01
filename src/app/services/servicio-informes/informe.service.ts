import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(private http: HttpClient) { }

  guardar(datos: any): Observable<any> {
    // Guardar informes
    return this.http.post('https://ivobackend.online/api/informes/guardar', datos);
    // return this.http.post( 'http://localhost/ivo_backend/public/api/informes/guardar', datos);
  }
}
