import { TestBed } from '@angular/core/testing';

import { UpdateStoryService } from './update-story.service';

describe('UpdateStoryService', () => {
  let service: UpdateStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
