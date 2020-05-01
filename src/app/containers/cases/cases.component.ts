// Dependencies
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

// Services
import {CovidService} from '../../services/covid.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {

  public loadingConfirmed: boolean;
  public loadingDeaths: boolean;
  public loadingRecovered: boolean;

  public casesConfirmed: any = {};
  public casesDeaths: any = {};
  public casesRecovered: any = {};
  public tabHeaderPosition: string;
  public isMobile: boolean;
  public loading: boolean;

  private $subscription: Subscription;
  private casesDeathSuscription$: Subscription;
  private casesConfirmedSuscription$: Subscription;
  private casesRecoveredSuscription$: Subscription;

  constructor(
    private readonly covidService: CovidService,
    private readonly deviceDetectorService: DeviceDetectorService,
  ) {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.tabHeaderPosition = this.deviceDetectorService.isDesktop() ? 'below' : 'above';
  }

  ngOnInit(): void {
    this.setSubscribe();
  }

  ngOnDestroy(): void {
    this.casesDeathSuscription$ && this.casesDeathSuscription$.unsubscribe();
    this.casesConfirmedSuscription$ && this.casesConfirmedSuscription$.unsubscribe();
    this.casesRecoveredSuscription$ && this.casesRecoveredSuscription$.unsubscribe();
  }

  private setSubscribe(): void {
    this.loadingRecovered = this.loadingDeaths = this.loadingConfirmed = true;

    this.casesDeathSuscription$ = this.covidService.getCasesDeaths()
      .subscribe(response => {
        this.casesDeaths = response;
        this.loadingDeaths = false;
      });

    this.casesConfirmedSuscription$ = this.covidService.getCases()
      .subscribe(response => {
        this.casesConfirmed = response;
        this.loadingConfirmed = false;
      });

    this.casesRecoveredSuscription$ = this.covidService.getCasesRecovered()
      .subscribe(response => {
        this.casesRecovered = response;
        this.loadingRecovered = false;
      });
  }


}
