import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { ServicioPedirCitaService } from '../../../services/servicio-pedir-cita/servicio-pedir-cita.service';


@Component({
  selector: 'app-componente-gestionar-agenda-medico',
  templateUrl: './componente-gestionar-agenda-medico.component.html',
  styleUrls: ['./componente-gestionar-agenda-medico.component.css'],

})
export class ComponenteGestionarAgendaMedicoComponent {

  // Variables de Shadi en el componente 'horario-sidebar'.
  selected: Date | undefined;
  fechaFormateada: string = '';
  fechaSeleccionada: boolean = false;
  selectedDateRange: DateRange<Date> | undefined;

  constructor(
    private router: Router,
    private dateAdapter: DateAdapter<Date>,
    private pedirCitaService: ServicioPedirCitaService

  ) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('es-ES');
    this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
  }

  /* Este método es el "original", pero sin rango de fechas.
    seleccionarDiaCalendario(event: any) {
      let fecha = new Date(event);
  
      if (!isNaN(fecha.getTime())) {
        let anyo = fecha.getFullYear();
        let mes = (fecha.getMonth() + 1 < 10 ? '0' : '') + (fecha.getMonth() + 1);
        let dia = (fecha.getDate() < 10 ? '0' : '') + fecha.getDate();
        this.fechaFormateada = `${anyo}-${mes}-${dia}`;
        console.log("Día seleccionado: " + this.fechaFormateada);
        // CODIGO SHADI: this.citasPorFecha(this.formattedDate); // La fecha formateada se pasa a otro metodo.
      }
    }*/


  _onSelectedChange(date: Date): void { // Este método almacenará el rango de fechas pinchado en el calendario.

    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(this.selectedDateRange.start, date);
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
    // Formatear fechas para mostrarlas en formato yyyy-mm-dd
    // Sumamos milisegundos porque al usar toISOString() coge un día menor al pinchado.
    let fechaInicioFormateada = this.selectedDateRange.start ? new Date(this.selectedDateRange.start.getTime() + 86400000).toISOString().split('T')[0] : ''; // 86400000 milisegundos = 1 día. 
    let fechaFinFormateada = this.selectedDateRange.end ? new Date(this.selectedDateRange.end.getTime() + 86400000).toISOString().split('T')[0] : ''; // 86400000 milisegundos = 1 día
    let fechaDiasLibres = `${fechaInicioFormateada} - ${fechaFinFormateada}`;
    this.pedirCitaService.rangoFechas = fechaDiasLibres; // Almacenamos el rango de las fechas en el servicio de pedirCita.
    this.fechaSeleccionada = true;
  }

  continuarAlPaso2() {
    this.router.navigate(['/medico/gestionarAgenda/gestionarAgendaPaso2']);
  }

}
