import { TestBed } from '@angular/core/testing';

import { GaleriaServiceService } from './galeria-service.service';

describe('GaleriaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaleriaServiceService = TestBed.get(GaleriaServiceService);
    expect(service).toBeTruthy();
  });
});
