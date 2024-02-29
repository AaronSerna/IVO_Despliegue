import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-informe-pruebas',
  templateUrl: './componente-informe-pruebas.component.html',
  styleUrls: ['./componente-informe-pruebas.component.css']
})
export class ComponenteInformePruebasComponent {
  @Input() anchoInforme: number = 0;
  @Input() alturaInforme: number = 0;
  @Input() id: string = '';

  @Output() textoCambiado: EventEmitter<string> = new EventEmitter<string>(); //Utilizamos el Output para emitir eventos del componente hijo al padre,
                                                                              //en este caso emitimos el evento hacia el componente-subir-pruebas

  textAreaContentInforme: string = ''; 
  lastTextAreaValue: string = ''; // Variable para almacenar el último valor del textarea

  constructor() {}

  onTextAreaInput(event: any): void { //Esta función entra en acción cuando hay un cambio en el textArea, actualiza el contenido del informe y 
                                    //emite el evento textoCambiado que contiene el nuevo contenido del textArea
    const newValue = event.target.value;

    if (newValue !== this.lastTextAreaValue) {
      this.textAreaContentInforme = newValue; 
      this.textoCambiado.emit(this.textAreaContentInforme);
      this.lastTextAreaValue = newValue;
    }
  }
}
