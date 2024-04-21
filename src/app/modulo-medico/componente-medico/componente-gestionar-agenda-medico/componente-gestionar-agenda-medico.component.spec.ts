import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGestionarAgendaMedicoComponent } from './componente-gestionar-agenda-medico.component';

describe('ComponenteGestionarAgendaMedicoComponent', () => {
  let component: ComponenteGestionarAgendaMedicoComponent;
  let fixture: ComponentFixture<ComponenteGestionarAgendaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteGestionarAgendaMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteGestionarAgendaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
