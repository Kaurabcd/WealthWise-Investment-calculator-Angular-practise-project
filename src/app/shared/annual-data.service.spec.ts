import { TestBed } from '@angular/core/testing';

import { AnnualDataService } from './annual-data.service';

describe('AnnualDataService', () => {
  let service: AnnualDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
