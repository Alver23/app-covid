// Dependencies
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Actions
import { loadCasesDeath, loadCasesDeathFailure, loadCasesDeathSuccess} from '../actions/cases-death.actions';

// Services
import { CovidService } from '../../../../services/covid/covid.service';



@Injectable()
export class CasesDeathEffects {

  loadCasesDeath$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(loadCasesDeath),
      concatMap(() =>
        this.covidService
          .getCasesDeaths()
          .pipe(
            map(data => loadCasesDeathSuccess({ data })),
            catchError(error => of(loadCasesDeathFailure({ error })))
          )
      )
    );
  });



  constructor(private actions$: Actions, private readonly covidService: CovidService) {}

}
