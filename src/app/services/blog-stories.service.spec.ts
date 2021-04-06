import { TestBed } from '@angular/core/testing';

import { BlogStoriesService } from './blog-stories.service';

describe('BlogStoriesService', () => {
  let service: BlogStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
