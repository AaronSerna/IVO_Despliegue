import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css']
})
export class ComponenteHistorialPacienteComponent {
  ocultarPopUp: boolean = true;

  togglePopup() : void {
    this.ocultarPopUp = !this.ocultarPopUp;
  }
}
