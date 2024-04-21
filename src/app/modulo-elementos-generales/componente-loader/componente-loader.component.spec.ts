import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLoaderComponent } from './componente-loader.component';

describe('ComponenteLoaderComponent', () => {
  let component: ComponenteLoaderComponent;
  let fixture: ComponentFixture<ComponenteLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteLoaderComponent]
    });
    fixture = TestBed.createComponent(ComponenteLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
