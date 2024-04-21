import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGestionarAgendaPasoDosMedicoComponent } from './componente-gestionar-agenda-paso-dos-medico.component';

describe('ComponenteGestionarAgendaPasoDosMedicoComponent', () => {
  let component: ComponenteGestionarAgendaPasoDosMedicoComponent;
  let fixture: ComponentFixture<ComponenteGestionarAgendaPasoDosMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteGestionarAgendaPasoDosMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteGestionarAgendaPasoDosMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
