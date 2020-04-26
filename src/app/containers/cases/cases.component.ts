import {Component, OnDestroy, OnInit} from '@angular/core';
import { CasesService } from './cases.service';
import {combineLatest, Subscription} from 'rxjs';


interface ICases {
  total: number;
  items: any[];
}
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit, OnDestroy {

  public casesByCity: ICases;
  public casesByState: ICases;
  public casesDeaths: ICases;
  public casesRecovered: ICases;
  public casesHospital: ICases;
  public casesHospitalUCI: ICases;

  private $subscription: Subscription;

  constructor(
    private casesService: CasesService,
  ) { }

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
      this.casesService.getCases(),
      this.casesService.getCasesByCity(),
      this.casesService.getCasesByState(),
      this.casesService.getTotalAttention(),
      this.casesService.getCasesByAttention(death),
      this.casesService.getCasesByAttention(recovered),
      this.casesService.getCasesByAttention(hospital),
      this.casesService.getCasesByAttention(hospitalUCI),
    )
      .subscribe(([totalCases$, casesByCity$, casesByState$, attention$, casesByDeaths$, casesByRecovered$, hospital$, hospitalUCI$]) => {
        this.casesByCity = {
          total: totalCases$.count,
          items: casesByCity$,
        };

        this.casesByState = {
          total: totalCases$.count,
          items: casesByState$,
        };

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
        }
      });
  }


}
