import { Component, Input, OnInit } from '@angular/core';
import { CrearCitaService } from '../../services/crear-cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-resumen-datos-crear-cita-paso-tres',
  templateUrl: './componente-resumen-datos-crear-cita-paso-tres.component.html',
  styleUrls: ['./componente-resumen-datos-crear-cita-paso-tres.component.css'],
})
export class ComponenteResumenDatosCrearCitaPasoTresComponent implements OnInit {
  @Input() mostrarResumenDatosCrearCita: boolean = false;
  citasPaso1: any[] = [];
  citasPaso2: any[] = [];

  constructor(private router: Router, private crearCitaService: CrearCitaService) {}

  ngOnInit(): void {
    this.citasPaso1 = this.crearCitaService.obtenerCitasPaso1();
    this.citasPaso2 = this.crearCitaService.obtenerCitasPaso2();
    console.log('Citas obtenidas - Paso 1:', this.citasPaso1);
    console.log('Citas obtenidas - Paso 2:', this.citasPaso2);
  }

  continuarAconfirmacion() {
    const citasAntiguasPaso1 = this.crearCitaService.limpiarCitasPaso1();
    const citasAntiguasPaso2 = this.crearCitaService.limpiarCitasPaso2();

    // Redirigir según sea necesario
    this.router.navigate([
      'administrativo/crearPaciente/crearPacientePaso2/crearPacientePaso3/confirmacionCreacionPaciente'
    ]);
  }
}
