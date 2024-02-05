import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-modificar-cita-administrativo',
  templateUrl: './componente-modificar-cita-administrativo.component.html',
  styleUrls: ['./componente-modificar-cita-administrativo.component.css']
})
export class ComponenteModificarCitaAdministrativoComponent {

  @Input() mostrarFormularioCrearPaciente: boolean = true;
  @Input() rutaProximoPaso: string = '';
  @Input() mostrarFormPrincipal: boolean = true;
  @Input() mostrarFormCrearPaciente: boolean = true;
  @Input() estilosFormulario: any = {};

  
}
