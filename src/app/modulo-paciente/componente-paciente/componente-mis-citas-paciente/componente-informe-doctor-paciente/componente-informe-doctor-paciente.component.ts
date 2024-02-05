import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-informe-doctor-paciente',
  templateUrl: './componente-informe-doctor-paciente.component.html',
  styleUrls: ['./componente-informe-doctor-paciente.component.css']
})
export class ComponenteInformeDoctorPacienteComponent {

  @Input() tipoTextarea: string='';
  @Input() numeroRowsTextarea:string='';
  @Input() numeroColsTextarea:string='';

}
