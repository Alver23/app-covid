import { createAction, props } from '@ngrx/store';

export enum CasesActionTypes {
  load = '[CasesRecovered] Load cases recovered',
  success = '[CasesRecovered] Load cases recovered success',
  error = '[CasesRecovered] Load cases recovered failure',
}

export const loadCasesRecovered = createAction(
  CasesActionTypes.load
);

export const loadCasesRecoveredSuccess = createAction(
  CasesActionTypes.success,
  props<{ data: any }>()
);

export const loadCasesRecoveredFailure = createAction(
  CasesActionTypes.error,
  props<{ error: any }>()
);
