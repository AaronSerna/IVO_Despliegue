import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPacienteErrorComponent } from './componente-pedir-cita-paciente-error.component';

describe('ComponentePedirCitaPacienteErrorComponent', () => {
  let component: ComponentePedirCitaPacienteErrorComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPacienteErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPacienteErrorComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPacienteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
