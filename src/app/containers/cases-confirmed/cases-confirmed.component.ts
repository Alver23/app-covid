// Dependencies
import { Observable } from 'rxjs';
import {Component, Input, OnInit} from '@angular/core';

// Services
import { CasesService } from './services/cases.service';

// Models
import { CasesConfirmed } from './models/cases';

@Component({
  selector: 'app-cases-confirmed',
  templateUrl: './cases-confirmed.component.html',
  styleUrls: ['./cases-confirmed.component.scss']
})
export class CasesConfirmedComponent implements OnInit {

  public cases$: Observable<CasesConfirmed>;
  public loading$: Observable<boolean>;

  @Input() tabHeaderPosition: string;

  constructor(
    private readonly casesService: CasesService,
  ) { }

  ngOnInit(): void {
    this.cases$ = this.casesService.getCases$();
    this.loading$ = this.casesService.getLoading$();
  }

}
