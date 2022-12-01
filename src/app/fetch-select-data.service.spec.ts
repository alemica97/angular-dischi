import { TestBed } from '@angular/core/testing';

import { FetchSelectDataService } from './fetch-select-data.service';

describe('FetchSelectDataService', () => {
  let service: FetchSelectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSelectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
