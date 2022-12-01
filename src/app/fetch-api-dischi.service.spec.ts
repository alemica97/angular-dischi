import { TestBed } from '@angular/core/testing';

import { FetchApiDischiService } from './fetch-api-dischi.service';

describe('FetchApiDischiService', () => {
  let service: FetchApiDischiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDischiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
