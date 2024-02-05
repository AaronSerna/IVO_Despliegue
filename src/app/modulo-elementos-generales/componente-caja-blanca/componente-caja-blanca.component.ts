import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router
import { CrearCitaService } from '../../services/crear-cita.service';
@Component({
  selector: 'app-componente-caja-blanca',
  templateUrl: './componente-caja-blanca.component.html',
  styleUrls: ['./componente-caja-blanca.component.css'],
})
export class ComponenteCajaBlancaComponent {

  constructor(private router: Router, private crearCitaService: CrearCitaService) {}


  @Input() mostrarPasosFormulario: boolean = true;

  @Input() tituloSeccionFormulario: string = '';
  @Input() descripcionTituloFormulario: string = '';

  //PROPIEDADES PARA MOSTRAR U OCULTAR EL FORMULARIO PARA CREAR PACIENTE O EL FORMULARIO PRINCIPAL QUE SE USA EN CASI TODOS LOS COMPONENTES
  @Input() mostrarFormularioPrincipal: boolean = true;
  @Input() mostrarFormPrincipal: boolean = false;
  @Input() mostrarFormCrearPaciente: boolean = false;
  @Input() mostrarResumenDatosCrearCita: boolean = false;
  @Input() mostrarResumenDatosPedirCitaPaciente: boolean = false;

  @Input() texto1: string = '';
  @Input() texto2: string = '';
  @Input() texto3: string = '';
  @Input() texto4: string = '';
  @Input() texto5: string = '';


  @Input() labelNuevoMedico: string = '';
  @Input() labelNuevaFecha: string = '';
  @Input() labelNuevaHora: string = '';

  @Input() mostrarNuevoMedico: boolean = true;
  @Input() mostrarNuevaFecha: boolean = true;
  @Input() mostrarNuevaHora: boolean = true;
  @Input() mostrarUltimaPregunta: boolean = false;
  @Input() mostrarEleccionMedico: boolean = false; // Select usado en Pedir cita (Paciente)


  // @Input() de 'Pedir cita' (Paciente):
  @Input() mostrarCheckboxesPedirCita: boolean = false;
  @Input() mostrarTercerCheckboxPedirCita: boolean = false;
  @Input() mostrarTercerLabelPedirCita: boolean = false;
  @Input() labelCheckboxesPedirCita: string = '';
  @Input() textoLabel1: string = '';
  @Input() textoLabel2: string = '';
  @Input() textoLabel3: string = '';
  @Input() valueCheckbox1: string = '';
  @Input() valueCheckbox2: string = '';
  @Input() valueCheckbox3: string = '';

  @Input() mostrarInputsPedirCita: boolean = false;




  @Input() estilosPaso1: any = {};
  @Input() estilosCuadradoPaso1: any = {};

  @Input() estilosPaso2: any = {};
  @Input() estilosCuadradoPaso2: any = {};

  @Input() estilosPaso3: any = {};
  @Input() estilosCuadradoPaso3: any = {};

  @Input() estilosPaso4: any = {};
  @Input() estilosCuadradoPaso4: any = {};

  @Input() estilosPaso5: any = {};
  @Input() estilosCuadradoPaso5: any = {};

  @Input() rutaProximoPaso: string = '';
  @Input() rutaAnteriorPaso: string = '';

  @Input() mostrarBotonRetroceder: boolean = false;
  @Input() mostrarInputCuatro: boolean = false;
  
  @Input() estiloBotonRetroceder: any = {};
  @Input() estiloBotonContinuar: any = {};

  @Input() estilosFormulario: any = {};

  //PROPIEDAD PARA MOSTRAR EL MENSAJE DE CONFIRMACION, ELIMINACION O MODIFICACION DE UN PACIENTE (USUARIO ADMINISTRATIVO)
  @Input() mostrarComponenteMensajeAccion: boolean = false;
  @Input() mostrarConfirmacionModificarCita: boolean = false;
  
  @Input() rutaBotonSi: string = ''; //VARIABLE PARA LA RUTA DEL BOTON SI
  @Input() rutaBotonCancelar: string = ''; //VARIABLE PARA LA RUTA DEL BOTON CANCELAR

  @Input() textoConfirmacion: string = '';
  @Input() textoBoton: string = '';
  @Input() ruta: string = '';

  //OBJETO PARA GUARDAR LOS DATOS DEL PASO 1 DE CREAR CITA DE ADMINISTRATIVO
  crearCitaPaso1Formulario = {
    dni: ''
  };

  crearCitaPaso2Formulario = {
    especialidad: '',
    fecha: '',
    hora: '',
    medico: '',
  };

  enviarFormulario() {
    this.crearCitaService.guardarCitaPaso1(this.crearCitaPaso1Formulario);
    this.router.navigate(['/administrativo/crearCita/crearCitaPaso1/crearCitaPaso2']);

    // Aquí puedes agregar lógica adicional, como enviar datos al servidor.
  }

  enviarFormularioPaso2(){
    this.crearCitaService.guardarCitaPaso2(this.crearCitaPaso2Formulario);
    this.router.navigate(['/administrativo/crearCita/crearCitaPaso1/crearCitaPaso2/crearCitaPaso3']);
  }


  //VERIFICACIONES DEL DNI
  formatoDNIValido = false;
  dniFormatoCorrecto = false;
  formularioInvalido = false;

  validarDNI(dni: string): boolean {
    const regexDNI = /^[0-9]{8}[a-zA-Z]$/;
    return regexDNI.test(dni);
  }

  verificarFormatoDNI() {
    this.formatoDNIValido = this.validarDNI(this.crearCitaPaso1Formulario.dni);
  }

  @Input() crearCitaPaso1: boolean = false;
  @Input() crearCitaPaso2: boolean = false;
  @Input() crearCitaPaso3: boolean = false;


}
