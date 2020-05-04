// Dependencies
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

// Services
import { CasesRecoveredService } from './services/cases-recovered.service';

// Models
import { CasesRecovered } from './models/cases';

@Component({
  selector: 'app-cases-recovered',
  templateUrl: './cases-recovered.component.html',
  styleUrls: ['./cases-recovered.component.scss']
})
export class CasesRecoveredComponent implements OnInit {

  public cases$: Observable<CasesRecovered>;
  public loading$: Observable<boolean>;
  @Input() tabHeaderPosition: string;

  constructor(private readonly casesService: CasesRecoveredService) { }

  ngOnInit(): void {
    this.cases$ = this.casesService.getCases$();
    this.loading$ = this.casesService.getLoading$();
    this.casesService.loadCases();
  }

}
