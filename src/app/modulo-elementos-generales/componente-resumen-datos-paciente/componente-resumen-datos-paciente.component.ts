import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-resumen-datos-paciente',
  templateUrl: './componente-resumen-datos-paciente.component.html',
  styleUrls: ['./componente-resumen-datos-paciente.component.css']
})
export class ComponenteResumenDatosPacienteComponent {

  @Input() mostrarResumenDatosPedirCitaPaciente: boolean = false;
  
  @Input() tipoCita:string = '';
  @Input() medicoCita = '';
  //Serán de tipo Date:
  @Input() fechaCita:string = '';
  @Input() horaCita:string = '';


}
