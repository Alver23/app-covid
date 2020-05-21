// Dependencies
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

// Models
import { CasesDeath } from './models/cases';

// Services
import { CasesDeathService } from './services/cases-death.service';

@Component({
  selector: 'app-cases-death',
  templateUrl: './cases-death.component.html',
  styleUrls: ['./cases-death.component.scss']
})
export class CasesDeathComponent implements OnInit {

  public cases$: Observable<CasesDeath>;
  public loading$: Observable<boolean>;

  @Input() tabHeaderPosition: string;

  constructor(private readonly casesService: CasesDeathService ) { }

  ngOnInit(): void {
    this.cases$ = this.casesService.getCases$();
    this.loading$ = this.casesService.getLoading$();
  }

}
