// Dependencies
import { TestBed } from '@angular/core/testing';
import { DeviceDetectorService } from 'ngx-device-detector';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeviceDetectorService,
      ],
    });
    service = TestBed.inject<TabService>(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the header position below', () => {
    expect(
      service.tabHeaderPosition
    ).toEqual('below');
  });

  it('should return false if isMobile', () => {
    expect(
      service.IsMobile
    ).toBeFalsy();
  });

});
