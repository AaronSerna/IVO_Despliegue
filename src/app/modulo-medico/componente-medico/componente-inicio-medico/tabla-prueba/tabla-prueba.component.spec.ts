import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPruebaComponent } from './tabla-prueba.component';

describe('TablaPruebaComponent', () => {
  let component: TablaPruebaComponent;
  let fixture: ComponentFixture<TablaPruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPruebaComponent]
    });
    fixture = TestBed.createComponent(TablaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
