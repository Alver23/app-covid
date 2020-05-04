import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CasesConfirmedState, casesConfirmedFeatureKey } from '../reducers/cases-confirmed.reducer';

export const selectCasesConfirmedState = createFeatureSelector<CasesConfirmedState>(
  casesConfirmedFeatureKey,
);

export const getCases = createSelector(
  selectCasesConfirmedState,
  (state: CasesConfirmedState) => state.data
);

export const getLoading = createSelector(
  selectCasesConfirmedState,
  (state: CasesConfirmedState) => state.loading,
);
