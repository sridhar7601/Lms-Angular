import { TestBed } from '@angular/core/testing';

import { WeeksService } from './weeks.service';

describe('WeeksService', () => {
  let service: WeeksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
