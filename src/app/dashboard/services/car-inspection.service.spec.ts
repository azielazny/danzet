import { TestBed, inject } from '@angular/core/testing';

import { CarInspectionService } from './car-inspection.service';

describe('CarInspectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarInspectionService]
    });
  });

  it('should be created', inject([CarInspectionService], (service: CarInspectionService) => {
    expect(service).toBeTruthy();
  }));
});
