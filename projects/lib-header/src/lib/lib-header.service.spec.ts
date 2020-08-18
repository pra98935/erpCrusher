import { TestBed } from '@angular/core/testing';

import { LibHeaderService } from './lib-header.service';

describe('LibHeaderService', () => {
  let service: LibHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
