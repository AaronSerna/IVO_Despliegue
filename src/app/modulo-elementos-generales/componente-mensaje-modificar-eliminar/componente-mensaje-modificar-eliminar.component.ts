import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-mensaje-modificar-eliminar',
  templateUrl: './componente-mensaje-modificar-eliminar.component.html',
  styleUrls: ['./componente-mensaje-modificar-eliminar.component.css']
})
export class ComponenteMensajeModificarEliminarComponent {
  @Input() accionRealizar: string = ''; //VARIABLE PARA CAMBIAR EL TEXTO DE LA ACCION A REALIZAR
  @Input() nombrePaciente: string = ''; //VARIABLE PARA CAMBIAR EL TEXTO DEL NOMBRE DEL PACIENTE
  @Input() rutaBotonSi: string = ''; //VARIABLE PARA LA RUTA DEL BOTON SI
  @Input() rutaBotonCancelar: string = ''; //VARIABLE PARA LA RUTA DEL BOTON CANCELAR
}
