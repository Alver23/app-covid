// Dependencies
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

// Models
import { CasesConfirmed } from '../models/cases';

// Selectors
import { getCases, getLoading } from '../store/selectors/cases-confirmed.selectors';

// Redux
import { loadCasesConfirmed } from '../store/actions/cases-confirmed.actions';

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  constructor(private readonly store: Store<CasesConfirmed>) {}

  public loadCasesConfirmed() {
    this.store.dispatch(loadCasesConfirmed());
  }

  public getCases$(): Observable<CasesConfirmed> {
    return this.store.pipe(select(getCases));
  }

  public getLoading$(): Observable<boolean> {
    return this.store.pipe(select(getLoading));
  }
}
