import { loadCasesConfirmed, CasesActionTypes } from './cases-confirmed.actions';

describe('loadCasesConfirmed', () => {
  it('should return an action', () => {
    expect(loadCasesConfirmed().type).toBe(CasesActionTypes.load);
  });
});
