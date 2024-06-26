// IMPORTACIONES GENERALES:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DataTablesModule } from 'angular-datatables';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

// IMPORTACIONES MÉDICO:
import { ComponenteMedicoComponent } from './componente-medico/componente-medico.component';
import { ComponenteInicioMedicoComponent } from './componente-medico/componente-inicio-medico/componente-inicio-medico.component';
import { ComponenteCitaMedicoComponent } from './componente-medico/componente-cita-medico/componente-cita-medico.component';
import { ComponenteCajaDiagnosticoComponent } from './componente-medico/componente-cita-medico/componente-caja-diagnostico/componente-caja-diagnostico.component';
import { ComponenteHistorialPacienteComponent } from './componente-medico/componente-cita-medico/componente-historial-paciente/componente-historial-paciente.component';
import { ComponenteCajaInformacionPacienteComponent } from './componente-medico/componente-cita-medico/componente-caja-informacion-paciente/componente-caja-informacion-paciente.component';
import { ComponentePopupConfirmarSalirComponent } from './componente-medico/componente-cita-medico/componente-popup-confirmar-salir/componente-popup-confirmar-salir.component';
import { ComponenteCabeceraInicioMedicoComponent } from './componente-medico/componente-inicio-medico/componente-cabecera-inicio-medico/componente-cabecera-inicio-medico.component';
import { ComponenteHorarioSidebarMedicoComponent } from './componente-medico/componente-inicio-medico/componente-horario-sidebar-medico/componente-horario-sidebar-medico.component';
import { ComponenteTablaPacientesMedicoComponent } from './componente-medico/componente-inicio-medico/componente-tabla-pacientes-medico/componente-tabla-pacientes-medico.component';
import { StylingService } from './componente-medico/services/styling.service';
import { SharedService } from './componente-medico/services/shared.service';
import { FormsModule } from '@angular/forms';

// IMPORTACIÓN MÓDULO ELEMENTOS GENERALES:
import { ModuloElementosGeneralesModule } from '../modulo-elementos-generales/modulo-elementos-generales.module';
import { ComponentePopupConfirmarCancelarComponent } from './componente-medico/componente-inicio-medico/componente-popup-confirmar-cancelar/componente-popup-confirmar-cancelar.component';
import { ComponenteGestionarAgendaMedicoComponent } from './componente-medico/componente-gestionar-agenda-medico/componente-gestionar-agenda-medico.component';
import { ComponenteGestionarAgendaPasoDosMedicoComponent } from './componente-medico/componente-gestionar-agenda-paso-dos-medico/componente-gestionar-agenda-paso-dos-medico.component';
import { ComponenteGestionarAgendaConfirmacionMedicoComponent } from './componente-medico/componente-gestionar-agenda-confirmacion-medico/componente-gestionar-agenda-confirmacion-medico.component';


@NgModule({
  declarations: [
    ComponenteMedicoComponent,
    ComponenteInicioMedicoComponent,
    ComponenteCitaMedicoComponent,
    ComponenteCajaDiagnosticoComponent,
    ComponenteHistorialPacienteComponent,
    ComponenteCajaInformacionPacienteComponent,
    ComponentePopupConfirmarSalirComponent,
    ComponenteCabeceraInicioMedicoComponent,
    ComponenteTablaPacientesMedicoComponent,
    ComponentePopupConfirmarCancelarComponent,
    ComponenteGestionarAgendaMedicoComponent,
    ComponenteGestionarAgendaPasoDosMedicoComponent,
    ComponenteGestionarAgendaConfirmacionMedicoComponent,
  ],
  imports: [
    CommonModule,
    ModuloElementosGeneralesModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ComponenteHorarioSidebarMedicoComponent,
    DataTablesModule,
    FormsModule,
    MatFormFieldModule, MatDatepickerModule
  ],
  providers: [StylingService, SharedService, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]
// ORIGINAL:  providers: [StylingService, SharedService, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, NativeDateAdapter, { provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: MatRangeDateSelectionModel }]

})
export class ModuloMedicoModule { }
