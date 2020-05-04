import { createAction, props } from '@ngrx/store';

export enum CasesActionTypes {
  load = '[CasesConfirmed] Load cases confirmed',
  success = '[CasesConfirmed] Load cases confirmed success',
  error = '[CasesConfirmed] Load cases confirmed failure'
}

export const loadCasesConfirmed = createAction(
  CasesActionTypes.load
);

export const loadCasesConfirmedSuccess = createAction(
  CasesActionTypes.success,
  props<{ data: any }>()
);

export const loadCasesConfirmedFailure = createAction(
  CasesActionTypes.error,
  props<{ error: any }>()
);
