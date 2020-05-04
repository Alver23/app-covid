// Dependencies
import { Action, createReducer, on } from '@ngrx/store';

// Actions
import { loadCasesRecovered, loadCasesRecoveredFailure, loadCasesRecoveredSuccess } from '../actions/cases-recovered.actions';

// Models
import { CasesRecovered } from '../../models/cases';

export const casesRecoveredFeatureKey = 'casesRecovered';

export interface CasesRecoveredState {
  data: CasesRecovered;
  loading: boolean;
  error: Error;
}

export const initialState: CasesRecoveredState = {
  data: null,
  loading: false,
  error: null,
};


export const casesRecoveredReducer = createReducer(
  initialState,
  on(loadCasesRecovered, state => ({
    ...state,
    loading: true,
  })),
  on(loadCasesRecoveredSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      ...data,
    },
  })),
  on(loadCasesRecoveredFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error,
  })),

);

export function reducer(state: CasesRecoveredState | undefined, action: Action) {
  return casesRecoveredReducer(state, action);
}

