import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-componente-caja-blanca-mediana',
  templateUrl: './componente-caja-blanca-mediana.component.html',
  styleUrls: ['./componente-caja-blanca-mediana.component.css']
})
export class ComponenteCajaBlancaMedianaComponent {
  numeroCita: string = '';

  constructor(private router: Router) { }

  siguiente() {
    if (this.numeroCita) {
      this.router.navigate(['radiologo/buscarCita/citas']);
    }
  }
}
