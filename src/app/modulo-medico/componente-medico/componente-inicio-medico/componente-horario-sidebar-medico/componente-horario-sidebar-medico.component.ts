import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-componente-horario-sidebar-medico',
  templateUrl: './componente-horario-sidebar-medico.component.html',
  styleUrls: ['./componente-horario-sidebar-medico.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class ComponenteHorarioSidebarMedicoComponent {
  selected: Date | undefined;
}
