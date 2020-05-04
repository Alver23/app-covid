// Redux
import { reducer, initialState } from './cases-confirmed.reducer';
import {loadCasesConfirmed, loadCasesConfirmedFailure, loadCasesConfirmedSuccess} from '../actions/cases-confirmed.actions';

describe('CasesConfirmed Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = reducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should call to action LoadCasesConfirmed', () => {
    const action = loadCasesConfirmed();
    const result = reducer(initialState, action);
    expect(result.loading).toBeTruthy();
    expect(result.data).toBeFalsy();
    expect(result.error).toBeFalsy();
  });

  it('should call to action loadCasesSuccess', () => {
    const data = { total: 1 };
    const action = loadCasesConfirmedSuccess({ data });
    const result = reducer(initialState, action);
    expect(result.data).toEqual(data);
    expect(result.loading).toBeFalsy();
    expect(result.error).toBeFalsy();
  });

  it('should call to action loadCasesFailure', () => {
    const error =  new Error();
    const action = loadCasesConfirmedFailure({ error });
    const result = reducer(initialState, action);
    expect(result.error).toEqual(error);
    expect(result.data).toBeFalsy();
    expect(result.loading).toBeFalsy();
  });

});
