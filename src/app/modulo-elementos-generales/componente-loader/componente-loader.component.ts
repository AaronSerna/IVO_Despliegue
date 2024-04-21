import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-loader',
  templateUrl: './componente-loader.component.html',
  styleUrls: ['./componente-loader.component.css']
})
export class ComponenteLoaderComponent implements OnInit {

  @Input() mensajeCarga: string = '';

  constructor() { }

  ngOnInit(): void {
    this.cargarAnimacion(2.5); // Definimos la opacidad del GIF.
  }


  cargarAnimacion(opacity: number) {
    let loader = document.getElementById('loader-container');

    if (loader !== null) {

      if (opacity <= 0) {
        loader.style.display = 'none';
      } else {
        loader.style.opacity = opacity.toString();
        
        window.setTimeout(() => {
          this.cargarAnimacion(opacity - 0.09);
        }, 165); // Definimos los segundos de espera entre la animación y el contenido del componente del usuario.
      }
    }
  }
}
