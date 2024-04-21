import { TestBed } from '@angular/core/testing';

import { ServicioPedirCitaService } from './servicio-pedir-cita.service';

describe('ServicioPedirCitaService', () => {
  let service: ServicioPedirCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPedirCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
