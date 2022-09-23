import { TestBed } from '@angular/core/testing';

import { ObserveDataService } from './observe-data.service';

describe('ObserveDataService', () => {
  let service: ObserveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
