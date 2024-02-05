import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-componente-subir-pruebas',
  templateUrl: './componente-subir-pruebas.component.html',
  styleUrls: ['./componente-subir-pruebas.component.css'],
})
export class ComponenteSubirPruebasComponent {
  @Input() tituloImagenes: string = '';
  @Input() siguienteRuta: string = '';

  mostrarPopUps: boolean = false;
  selectedFiles: File[] = []; //array de archivos subidos
  selectedFileIndex: number | null = null; // Nueva variable para el índice del archivo seleccionado

  constructor(private sanitizer: DomSanitizer) {} //ESTO UN POCO XD

  togglePopUps(index: number): void {
    this.selectedFileIndex = index;
    this.mostrarPopUps = !this.mostrarPopUps;
  }

  cerrarPopUps(): void {
    this.selectedFileIndex = null;
    this.mostrarPopUps = false;
  }

  onFileSelected(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      //Añadir cada archivo al array selectedFiles
      for (let i = 0; i < fileInput.files.length; i++) {
        this.selectedFiles.push(fileInput.files[i]);
      }
    }
  }

  getSafeUrl(file: File): SafeUrl {
    //ESTO UN POCO XD
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)); //ESTO UN POCO XD
  }
}
