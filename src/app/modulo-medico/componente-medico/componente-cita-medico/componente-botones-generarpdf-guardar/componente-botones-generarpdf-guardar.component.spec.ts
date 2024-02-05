import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBotonesGenerarpdfGuardarComponent } from './componente-botones-generarpdf-guardar.component';

describe('ComponenteBotonesGenerarpdfGuardarComponent', () => {
  let component: ComponenteBotonesGenerarpdfGuardarComponent;
  let fixture: ComponentFixture<ComponenteBotonesGenerarpdfGuardarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBotonesGenerarpdfGuardarComponent]
    });
    fixture = TestBed.createComponent(ComponenteBotonesGenerarpdfGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
