// Dependencies
import { createAction, props } from '@ngrx/store';

export enum CasesActionTypes {
  load = '[CasesDeath] Load cases deaths',
  success = '[CasesDeath] Load cases deaths success',
  error = '[CasesDeath] Load cases deaths failure',
}

export const loadCasesDeath = createAction(
  CasesActionTypes.load
);

export const loadCasesDeathSuccess = createAction(
  CasesActionTypes.success,
  props<{ data: any }>()
);

export const loadCasesDeathFailure = createAction(
  CasesActionTypes.error,
  props<{ error: any }>()
);
