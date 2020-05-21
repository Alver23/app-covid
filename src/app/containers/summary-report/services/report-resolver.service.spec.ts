import { TestBed } from '@angular/core/testing';

import { ReportResolverService } from './report-resolver.service';

describe('ReportResolverService', () => {
  let service: ReportResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
