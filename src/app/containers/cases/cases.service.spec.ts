import { TestBed } from '@angular/core/testing';

import { TotalCasesService } from './cases.service';

describe('TotalCasesService', () => {
  let service: TotalCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
