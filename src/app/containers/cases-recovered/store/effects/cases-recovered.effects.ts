// Dependencies
import { EMPTY, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import { loadCasesRecovered, loadCasesRecoveredSuccess, loadCasesRecoveredFailure } from '../actions/cases-recovered.actions';

// Services
import { CovidService } from '../../../../services/covid/covid.service';



@Injectable()
export class CasesRecoveredEffects {

  public loadCasesRecovered$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCasesRecovered),
      concatMap(() =>
        this.covidService.getCasesRecovered()
        .pipe(
          map(data => loadCasesRecoveredSuccess({ data })),
          catchError(error => of(loadCasesRecoveredFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private readonly covidService: CovidService) {}

}
