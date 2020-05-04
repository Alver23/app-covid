// Redux
import { reducer, initialState } from './cases-recovered.reducer';
import { loadCasesRecovered, loadCasesRecoveredFailure, loadCasesRecoveredSuccess } from '../actions/cases-recovered.actions';

describe('CasesRecovered Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('should call to action LoadCasesConfirmed', () => {
    const action = loadCasesRecovered();
    const result = reducer(initialState, action);
    expect(result.loading).toBeTruthy();
    expect(result.data).toBeFalsy();
    expect(result.error).toBeFalsy();
  });

  it('should call to action loadCasesSuccess', () => {
    const data = { total: 1 };
    const action = loadCasesRecoveredSuccess({ data });
    const result = reducer(initialState, action);
    expect(result.data).toEqual(data);
    expect(result.loading).toBeFalsy();
    expect(result.error).toBeFalsy();
  });

  it('should call to action loadCasesFailure', () => {
    const error =  new Error();
    const action = loadCasesRecoveredFailure({ error });
    const result = reducer(initialState, action);
    expect(result.error).toEqual(error);
    expect(result.data).toBeFalsy();
    expect(result.loading).toBeFalsy();
  });
});
