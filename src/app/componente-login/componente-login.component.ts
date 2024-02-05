import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})
export class ComponenteLoginComponent {

  contrasenaUsuario: string = '';
  contrasenaVisible: boolean = false;
  rutaIcono: string = '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';

  ngOnInit() {}

  cambiarVisibilidadIcono() {
    this.contrasenaVisible = !this.contrasenaVisible;  // Si la contraseña era invisible, ahora es visible (y viceversa).
    this.rutaIcono = this.contrasenaVisible
      ? '../../assets/images/ImagenesGenerales/iconoOjoAbiertoLogin.svg'
      : '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';
  }

}
