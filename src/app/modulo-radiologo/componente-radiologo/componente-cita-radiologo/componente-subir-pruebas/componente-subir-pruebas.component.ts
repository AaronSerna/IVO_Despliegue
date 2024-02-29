import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../../../services/servicio-auth/auth.service';
import { InformeService } from '../../../../services/servicio-informes/informe.service';
import { ImagenesService } from '../../../../services/servicio-imagenes/imagenes.service';
import { CitasService } from '../../../../services/servicio-citas/citas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-componente-subir-pruebas',
  templateUrl: './componente-subir-pruebas.component.html',
  styleUrls: ['./componente-subir-pruebas.component.css'],
})
export class ComponenteSubirPruebasComponent implements OnInit {
  @Input() tituloImagenes: string = '';
  @Input() siguienteRuta: string = '';

  mostrarPopUps: boolean = false;
  selectedFiles: File[] = []; //array de archivos subidos
  selectedFileIndex: number | null = null; // Nueva variable para el índice del archivo seleccionado

  textAreaOriginalContent: string = '';
  textAreasImagenesContent: string[] = []; // Array para almacenar los contenidos de los textAreas de las imágenes

  usuarioId: number = 0;
  id: number = 0; //id de la cita
  id_paciente: number = 0;
  datos: any = {};
  numCita: number = 0;

  nombreImagen: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private informeService: InformeService,
    private route: ActivatedRoute,
    private router: Router,
    private imagenesService: ImagenesService,
    private citasService: CitasService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del usuario al iniciar el componente
    this.authService.obtenerUsuarioId().subscribe((id: number | null) => {
      if (id !== null) {
        this.usuarioId = id;
        console.log('Usuario ID:', this.usuarioId);
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.id_paciente = params['id_paciente'];
      this.numCita = params['num_cita'];
      console.log('Numero de la cita:', this.id);
    });
  }

  togglePopUps(index: number): void {
    this.selectedFileIndex = index;
    this.mostrarPopUps = !this.mostrarPopUps;
  }

  cerrarPopUps(): void {
    this.selectedFileIndex = null;
    this.mostrarPopUps = false;

    // Limpiar el textAreaOriginalContent
    this.textAreaOriginalContent = '';

    // Concatenar el nombre del archivo con su contenido en textAreaOriginalContent
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file = this.selectedFiles[i];
      const fileName = file.name;
      const fileContent = this.textAreasImagenesContent[i] || ''; // Obtener el contenido del textArea de la imagen o cadena vacía si no hay contenido
      this.textAreaOriginalContent += `\n${fileContent}\n`;
      //this.textAreaOriginalContent += `\nImagen: ${fileName}\n${fileContent}\n`;   ESTO PARA QUE CONCATENE EL NOMBRE DE LA IMAGEN CON EL ARCHIVO
    }

    // Mostrar los arrays por consola
    console.log('selectedFiles:', this.selectedFiles);
    console.log('textAreasImagenesContent:', this.textAreasImagenesContent);
    console.log(this.textAreaOriginalContent);
  }

  onFileSelected(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      //Añadir cada archivo al array selectedFiles
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        this.selectedFiles.push(file);

        // Asignar el nombre del archivo a la propiedad nombreImagen
        this.nombreImagen = file.name;
      }
    }
  }

  getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)); //Genera una URL con blob
  }

  onTextoCambiado(texto: string): void {
    if (this.selectedFileIndex !== null) {
      this.textAreasImagenesContent[this.selectedFileIndex] = texto;
    }
  }

  guardarInforme() {
    this.datos.contenido = this.textAreaOriginalContent;
    this.datos.id_cita = this.id;
    this.datos.id_radiologo = this.usuarioId;

    this.informeService
      .guardar(this.datos)
      .pipe(
        tap((data: any) => {
          const id_informe = data.id_informe;
          console.log(id_informe);
          // Obtener el ID del informe recién guardado
          this.guardarImagenes(id_informe); // Llamar a la función guardarImagenes() con el ID del informe
          this.cumplirCita();

          //this.router.navigate(['radiologo/buscarCita/citas/confirmacion']); // Navegar a la página de confirmación
        })
      )
      .subscribe((data: any) => {});
  }

  guardarImagenes(id_informe: number) {
    this.selectedFiles.forEach((imagen: File) => {
      // Iterar sobre el array de imágenes y guardar cada una

      const formData = new FormData(); // Crear un objeto FormData para enviar la imagen al servidor
      formData.append('id_informe', id_informe.toString()); // Convertir id_informe a una cadena de caracteres porque formData solo acepta strings
      formData.append('id_paciente', this.id_paciente.toString()); // Convertir id_paciente a una cadena de caracteres
      formData.append('nombre_imagen', imagen.name);

      this.nombreImagen = imagen.name;
      // Agregar la imagen al FormData
      const imageUrl = `imagenes_radiologicas/${this.nombreImagen}`;
      formData.append('ruta_imagen', imagen);
      formData.append('id_cita', this.id.toString());
      console.log('Parámetros de la imagen:');
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Guardar el FormData en el servicio de imágenes
      /* const datosAGuardar={
        id_informe: id_informe,
        id_paciente: this.id_paciente,
        nombre_imagen: this.nombreImagen,
        ruta_imagen: imageUrl,
        id_cita: this.id,
      };*/
      this.imagenesService.guardar(formData).subscribe((data: any) => {
        // Lógica después de guardar la imagen...
      });
    });
  }

  cumplirCita() {
    this.citasService.cumplirCita(this.numCita).subscribe((data: any) => {});
  }

  eliminarImagen(index: number): void {
    // Eliminar la imagen del array selectedFiles
    this.selectedFiles.splice(index, 1);

    // Eliminar el contenido del textArea de la imagen del array textAreasImagenesContent
    this.textAreasImagenesContent.splice(index, 1);

    // Actualizar el textAreaOriginalContent con el contenido actualizado de textAreasImagenesContent
    this.textAreaOriginalContent = this.textAreasImagenesContent.join(`\n`);
  }
}
