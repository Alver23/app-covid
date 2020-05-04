// Dependencies
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Reduces
import { CasesDeathState, CasesDeathFeatureKey } from '../reducers/cases-death.reducer';


export const selectCasesDeathState = createFeatureSelector<CasesDeathState>(
  CasesDeathFeatureKey
);

export const getCases = createSelector(
  selectCasesDeathState,
  (state: CasesDeathState) => state.data
);

export const getLoading = createSelector(
  selectCasesDeathState,
  (state: CasesDeathState) => state.loading,
);
