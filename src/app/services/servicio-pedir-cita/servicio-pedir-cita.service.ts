import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioPedirCitaService {
  tipoCita: string = '';
  medicoSeleccionado: string = '';
  nombreMedicoSeleccionado: string = '';
  fechaSeleccionada: string = '';
  horaSeleccionada: string = '';
  citaSeleccionada: string = '';
  agendaMedico: any;
  rangoFechas: string = ''; // Esta variable almacena el rango de fechas seleccionada por el médico en el apartado 'Gestionar agenda'.


  constructor() {}
}
