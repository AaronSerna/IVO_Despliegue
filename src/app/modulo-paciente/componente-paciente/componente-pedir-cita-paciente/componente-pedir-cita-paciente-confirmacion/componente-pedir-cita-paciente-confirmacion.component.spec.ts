import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPacienteConfirmacionComponent } from './componente-pedir-cita-paciente-confirmacion.component';

describe('ComponentePedirCitaPacienteConfirmacionComponent', () => {
  let component: ComponentePedirCitaPacienteConfirmacionComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPacienteConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPacienteConfirmacionComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPacienteConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
