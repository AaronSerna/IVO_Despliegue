import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGestionarAgendaConfirmacionMedicoComponent } from './componente-gestionar-agenda-confirmacion-medico.component';

describe('ComponenteGestionarAgendaConfirmacionMedicoComponent', () => {
  let component: ComponenteGestionarAgendaConfirmacionMedicoComponent;
  let fixture: ComponentFixture<ComponenteGestionarAgendaConfirmacionMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteGestionarAgendaConfirmacionMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteGestionarAgendaConfirmacionMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
