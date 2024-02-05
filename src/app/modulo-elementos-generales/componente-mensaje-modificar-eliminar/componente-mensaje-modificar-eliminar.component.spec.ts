import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajeModificarEliminarComponent } from './componente-mensaje-modificar-eliminar.component';

describe('ComponenteMensajeModificarEliminarComponent', () => {
  let component: ComponenteMensajeModificarEliminarComponent;
  let fixture: ComponentFixture<ComponenteMensajeModificarEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteMensajeModificarEliminarComponent]
    });
    fixture = TestBed.createComponent(ComponenteMensajeModificarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
