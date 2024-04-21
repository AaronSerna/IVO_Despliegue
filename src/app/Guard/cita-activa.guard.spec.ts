import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { citaActivaGuard } from './cita-activa.guard';

describe('citaActivaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => citaActivaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
