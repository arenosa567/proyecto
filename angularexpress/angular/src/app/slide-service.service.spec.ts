import { TestBed } from '@angular/core/testing';

import { SlideServiceService } from './slide-service.service';

describe('SlideServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideServiceService = TestBed.get(SlideServiceService);
    expect(service).toBeTruthy();
  });
});
