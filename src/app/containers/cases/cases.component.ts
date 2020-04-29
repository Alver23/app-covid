import {Component, OnDestroy, OnInit} from '@angular/core';
import { CasesService } from './cases.service';
import {combineLatest, Subscription} from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

interface IItems {
  name: string;
  total: number;
}
interface ICases {
  total?: number;
  items: IItems[];
}
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {

  public totalCases: number;
  public totalDeaths: number;
  public totalRecovered: number;
  public casesByCity: ICases;
  public casesByState: ICases;
  public casesDeaths: any;
  public casesRecovered: any;
  public casesHospital: ICases;
  public casesHospitalUCI: ICases;
  public tabHeaderPosition: string;
  public isMobile: boolean;

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
        this.casesByCity = {
          items: casesByCity$,
        };

        this.casesByState = {
          items: casesByState$,
        };

        this.casesRecovered = {
          items: casesByRecovered$,
          states: casesByRecoveredState$,
        };

        this.casesDeaths = {
          items: casesBydeaths$,
          states: casesBydeathsState$,
        };

        /*

        const deathData = attention$.find(item => item.name === death);
        const recoveredData = attention$.find(item => item.name === recovered);
        const hospitalData = attention$.find(item => item.name === hospital);
        const hospitalUCIData = attention$.find(item => item.name === hospitalUCI);

        if (deathData) {
          const { count } = deathData;
          this.casesDeaths = {
            total: count,
            items: casesByDeaths$,
          };
        }

        if (recoveredData) {
          const { count } = recoveredData;
          this.casesRecovered = {
            total: count,
            items: casesByRecovered$,
          };
        }

        if (hospitalData) {
          const { count } = hospitalData;
          this.casesHospital = {
            total: count,
            items: hospital$,
          };
        }

        if (hospitalUCIData) {
          const { count } = hospitalUCIData;
          this.casesHospitalUCI = {
            total: count,
            items: hospitalUCI$,
          };
        }*/
      });
  }


}
