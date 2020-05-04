// Dependencies
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

// Models
import { CasesRecovered } from '../models/cases';

// Actions
import { loadCasesRecovered } from '../store/actions/cases-recovered.actions';

// Selectors
import { getCases, getLoading } from '../store/selectors/cases-recovered.selectors';

@Injectable({
  providedIn: 'root'
})
export class CasesRecoveredService {

  constructor(private readonly store: Store<CasesRecovered>) { }

  public loadCases() {
    this.store.dispatch(loadCasesRecovered());
  }

  public getCases$(): Observable<CasesRecovered> {
    return this.store.select(getCases);
  }

  public getLoading$(): Observable<boolean> {
    return this.store.select(getLoading);
  }
}
