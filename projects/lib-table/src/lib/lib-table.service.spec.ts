import { TestBed } from '@angular/core/testing';

import { LibTableService } from './lib-table.service';

describe('LibTableService', () => {
  let service: LibTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
