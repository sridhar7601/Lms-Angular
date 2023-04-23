import { TestBed } from '@angular/core/testing';

import { CoursecardsService } from './coursecards.service';

describe('CoursecardsService', () => {
  let service: CoursecardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursecardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
