import { TestBed } from '@angular/core/testing';

import { NewsfeedDataService } from './newsfeed-data.service';

describe('NewsfeedDataService', () => {
  let service: NewsfeedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsfeedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
