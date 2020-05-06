// Dependencies
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';

// Models
import { CasesDeath } from '../models/cases';

// Redux
import { getCases, getLoading } from '../store/selectors/cases-death.selectors';
import { loadCasesDeath } from '../store/actions/cases-death.actions';

@Injectable({
  providedIn: 'root',
})
export class CasesDeathService {
  constructor(private readonly store: Store<CasesDeath>) {}

  public loadCases() {
    this.store.dispatch(loadCasesDeath());
  }

  public getCases$(): Observable<CasesDeath> {
    return this.store.pipe(select(getCases));
  }

  public getLoading$(): Observable<boolean> {
    return this.store.pipe(select(getLoading));
  }
}
