import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-informe-pruebas',
  templateUrl: './componente-informe-pruebas.component.html',
  styleUrls: ['./componente-informe-pruebas.component.css']
})
export class ComponenteInformePruebasComponent {
  @Input() anchoInforme: number = 0;
  @Input() alturaInforme: number= 0;
  
}
