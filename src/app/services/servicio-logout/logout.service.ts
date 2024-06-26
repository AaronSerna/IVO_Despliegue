import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private apiUrl = 'https://ivobackend.online/api';
 // private apiUrl = 'http://localhost/ivo_backend/public/api';

  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }
}
