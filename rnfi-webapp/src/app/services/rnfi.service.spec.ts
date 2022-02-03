import { TestBed } from '@angular/core/testing';

import { RnfiService } from './rnfi.service';

describe('RnfiService', () => {
  let service: RnfiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RnfiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
