import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
//import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-componente-informe-doctor-paciente',
  templateUrl: './componente-informe-doctor-paciente.component.html',
  styleUrls: ['./componente-informe-doctor-paciente.component.css'],
})
export class ComponenteInformeDoctorPacienteComponent {
  @Input() tipoTextarea: string = '';
  @Input() numeroRowsTextarea: string = '';
  @Input() numeroColsTextarea: string = '';
  idCita: string = '';
  fechaCita: string = '';
  contenidoTextarea: string = '';

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Almacenamos el id_cita recibido en la URl y mostramos el informe o diagnóstico perteneciente a ese id.
    this.route.queryParams.subscribe((params) => {
      this.idCita = params['id'] || '';
      this.fechaCita = this.cambiarFormatoFecha(params['fechaCita']) || '';

      if (this.idCita) {
        this.mostrarContenidoTextarea();
      }
    });
  }

  // Función para formatear la fecha de YYY-mm-dd a dd-mm-yyyy
  cambiarFormatoFecha(fecha: string): string {
    let fechaNueva = new Date(fecha);
    let dia = fechaNueva.getDate();
    let mes = fechaNueva.getMonth() + 1; // Los meses son indexados desde 0
    let year = fechaNueva.getFullYear();

    // Formato dd-mm-yyyy
    return `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${year}`;
  }

  mostrarContenidoTextarea() {
    if (this.tipoTextarea === 'Diagnóstico') {
      this.obtenerDiagnostico();
    }
    if (this.tipoTextarea === 'Informe') {
      this.obtenerInforme();
    }
  }
  // Llamamos al endpoint y le pasamos el id de la cita:
  obtenerDiagnostico() {
    this.citasService
      .mostrarDiagnosticoDelPaciente(this.idCita)

      .subscribe((data: any) => {
        this.contenidoTextarea = data.contenido;
      });
  }

  obtenerInforme() {
    this.citasService
      .mostrarInformeDelPaciente(this.idCita)

      .subscribe((data: any) => {
        this.contenidoTextarea = data.contenido;
      });
  }

  /* ESTE CÓDIGO GENERA LOS PDF PARA EL PACIENTE, ESTÁ COMENTADO PORQUE EN CLOUDFLARE DA ERROR LA IMPORTACIÓN DE 'jspdf'.
PARA QUE FUNCIONE, HABRÁ QUE INSTALAR NODE MODULES (NPM INSTALL) Y SI NO SE HA INSTALADO CON ÉL 'jspdf',  EJECUTAR EL COMANDO:

npm install jspdf

Y DESCOMENTAR ESTE MÉTODO.

  generarPDF() {
    let pdf = new jsPDF();

    // Extraer el día, mes y año de this.fechaCita
    let fechaPartes = this.fechaCita.split('-');
    let dia = parseInt(fechaPartes[0], 10);
    let mesNumero = parseInt(fechaPartes[1], 10);
    let anio = parseInt(fechaPartes[2], 10);

    // Obtener el nombre del mes
    let nombreMes = new Date(anio, mesNumero - 1, dia).toLocaleString(
      'default',
      { month: 'long' }
    );

    // Concatenar la fecha en el formato deseado. Ejemplo: 1 de marzo de 2024.
    let fecha = `${dia} de ${nombreMes} de ${anio}`;

    let logoUrl = '/assets/images/IVO_CabeceraPDF.png';
    pdf.addImage(logoUrl, 'PNG', 55, -9, 110, 50);

    // Contenido del PDF con fuente y tamaño de letra personalizados
    pdf.setFont('arial', 'normal'); // Cambia la fuente y estilo (normal, italic, bold)
    pdf.setFontSize(13); // Cambia el tamaño de la letra

    const contenidoConSaltos = this.contenidoTextarea.replace(/\n/g, '\n'); // Reemplazar saltos de línea con dobles saltos

    const maxLineasPorPagina = 30; // Nos aseguramos que sólo se escriban 30 lineas por página del PDF.
    const alturaPagina = pdf.internal.pageSize.height;
    const anchoMaximo = 180;
    const margenInferior = 30; // Le damos un margin al pie de página en cada hoja para su mejora estética.

    let lineas = pdf.splitTextToSize(contenidoConSaltos, anchoMaximo);

    let y = 60;
    let lineasEnPagina = 0;

    for (let i = 0; i < lineas.length; i++) {
      if (
        lineasEnPagina >= maxLineasPorPagina ||
        y + 10 > alturaPagina - margenInferior
      ) {
        pdf.addPage();
        y = 35; // Establecer el valor inicial de y para la nueva página
        lineasEnPagina = 0;
      }
      pdf.text(lineas[i], 15, y, { maxWidth: anchoMaximo, align: 'justify' });
      y += 10;
      lineasEnPagina++;
    }

    pdf.text(
      `Valencia, a ${fecha}`,
      70,
      pdf.internal.pageSize.height - margenInferior
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl1 = '/assets/images/IVO_PiePagina1.png';
    pdf.addImage(
      pieImagenUrl1,
      'PNG',
      6,
      pdf.internal.pageSize.height - 18,
      65,
      12
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl2 = '/assets/images/IVO_PiePagina2.png';
    pdf.addImage(
      pieImagenUrl2,
      'PNG',
      155,
      pdf.internal.pageSize.height - 18,
      50,
      12
    );

    // Guardar el PDF
    if (this.tipoTextarea === 'Diagnóstico') {
      pdf.save('diagnostico.pdf');
    } else {
      pdf.save('informe.pdf');
    }
  }*/
}
