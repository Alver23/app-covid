// Dependencies
import { Action, createReducer, on } from '@ngrx/store';

// Actions
import { loadCasesDeath, loadCasesDeathFailure, loadCasesDeathSuccess} from '../actions/cases-death.actions';

// Models
import { CasesDeath } from '../../models/cases';

export const CasesDeathFeatureKey = 'CasesDeath';

export interface CasesDeathState {
  data: CasesDeath;
  loading: boolean;
  error: Error;
}

export const initialState: CasesDeathState = {
  data: null,
  loading: false,
  error: null,
};


export const CasesDeathReducer = createReducer(
  initialState,
  on(loadCasesDeath, state => ({
    ...state,
    loading: true,
  })),
  on(loadCasesDeathSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      ...data,
    },
  })),
  on(loadCasesDeathFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error,
  })),
);

export function reducer(state: CasesDeathState | undefined, action: Action) {
  return CasesDeathReducer(state, action);
}

