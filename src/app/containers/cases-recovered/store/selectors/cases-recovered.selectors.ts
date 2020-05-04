import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CasesRecoveredState, casesRecoveredFeatureKey } from '../reducers/cases-recovered.reducer';

export const selectCasesRecoveredState = createFeatureSelector<CasesRecoveredState>(
  casesRecoveredFeatureKey
);

export const getCases = createSelector(
  selectCasesRecoveredState,
  (state: CasesRecoveredState) => state.data
);

export const getLoading = createSelector(
  selectCasesRecoveredState,
  (state: CasesRecoveredState) => state.loading,
);
