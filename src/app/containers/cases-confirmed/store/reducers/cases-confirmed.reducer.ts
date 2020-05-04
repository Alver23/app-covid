// Dependencies
import { Action, createReducer, on } from '@ngrx/store';

// Actions
import { loadCasesConfirmed, loadCasesConfirmedFailure, loadCasesConfirmedSuccess } from '../actions/cases-confirmed.actions';

export const casesConfirmedFeatureKey = 'casesConfirmed';

// Models
import { CasesConfirmed } from '../../models/cases';

export interface CasesConfirmedState {
  data: CasesConfirmed;
  loading: boolean;
  error: Error;
}

export const initialState: CasesConfirmedState = {
  data: null,
  loading: false,
  error: null,
};


const casesReducer = createReducer(
  initialState,
  on(loadCasesConfirmed, state => ({
    ...state,
    loading: true,
  })),
  on(loadCasesConfirmedSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      ...data,
    },
  })),
  on(loadCasesConfirmedFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error,
  })),
);

export function reducer(state: CasesConfirmedState | undefined, action: Action) {
  return casesReducer(state, action);
}

