// Dependencies
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';

// Actions
import { loadCasesConfirmed, loadCasesConfirmedFailure, loadCasesConfirmedSuccess } from '../actions/cases-confirmed.actions';

// Services
import { CovidService } from '../../../../services/covid/covid.service';



@Injectable()
export class CasesConfirmedEffects {


  public loadCasesConfirmed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCasesConfirmed),
      concatMap(() =>
        this.covidService
          .getCases()
          .pipe(
          map(data => loadCasesConfirmedSuccess({ data })),
          catchError(error => of(loadCasesConfirmedFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private readonly covidService: CovidService) {}

}
