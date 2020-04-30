import {Component, OnDestroy, OnInit} from '@angular/core';
import { CasesService } from './cases.service';
import {combineLatest, Subscription} from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {

  public totalCases: number;
  public totalDeaths: number;
  public totalRecovered: number;
  public casesConfirmed: any = {};
  public casesDeaths: any = {};
  public casesRecovered: any = {};
  public tabHeaderPosition: string;
  public isMobile: boolean;
  public loading: boolean;

  private $subscription: Subscription;

  constructor(
    private readonly casesService: CasesService,
    private readonly deviceDetectorService: DeviceDetectorService,
  ) {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.tabHeaderPosition = this.deviceDetectorService.isDesktop() ? 'below' : 'above';
  }

  ngOnInit(): void {
    this.setSubscribe();
  }

  ngOnDestroy(): void {
    this.$subscription && this.$subscription.unsubscribe();
  }

  private setSubscribe(): void {
    const death = 'Fallecido';
    const recovered = 'Recuperado';
    const hospital = 'Hospital';
    const hospitalUCI = 'Hospital UCI';
    this.loading = true;
    this.$subscription = combineLatest(
      this.casesService.getTotalCases(),
      this.casesService.getCasesByCity(),
      this.casesService.getTotalCasesByAttention(death),
      this.casesService.getTotalCasesByAttention(recovered),
      this.casesService.getCasesByState(),
      this.casesService.getCasesByAttention(recovered),
      this.casesService.getCasesByAttention(death),
      this.casesService.getCasesByAttention(recovered, 'departamento'),
      this.casesService.getCasesByAttention(death, 'departamento'),
    )
      .subscribe(([totalCases$, casesByCity$, totalDeaths$, totalRecovered$, casesByState$, casesByRecovered$, casesBydeaths$, casesByRecoveredState$, casesBydeathsState$]) => {
        this.totalCases = totalCases$.total;
        this.totalDeaths = totalDeaths$[0].total;
        this.totalRecovered = totalRecovered$[0].total;
        this.casesConfirmed = {
          cities: casesByCity$,
          states: casesByState$,
        };

        this.casesRecovered = {
          cities: casesByRecovered$,
          states: casesByRecoveredState$,
        };

        this.casesDeaths = {
          cities: casesBydeaths$,
          states: casesBydeathsState$,
        };

        this.loading = false;
      });
  }


}
