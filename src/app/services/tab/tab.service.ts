// Dependencies
import { Injectable } from '@angular/core';

// Services
import { DeviceDetectorService } from 'ngx-device-detector';

type HeaderPosition = 'below' | 'above';
@Injectable({
  providedIn: 'root'
})
export class TabService {

  private headerPosition: HeaderPosition;
  private isMobile: boolean;

  constructor(private readonly deviceDetectorService: DeviceDetectorService) {
    this.IsMobile = this.deviceDetectorService.isMobile();
    this.tabHeaderPosition = this.deviceDetectorService.isDesktop() ? 'below' : 'above';
  }

  public get IsMobile(): boolean {
    return this.isMobile;
  }

  public set IsMobile(value: boolean) {
    this.isMobile = value;
  }

  public get tabHeaderPosition(): HeaderPosition {
    return this.headerPosition;
  }

  public set tabHeaderPosition(value: HeaderPosition) {
    this.headerPosition = value;
  }
}
