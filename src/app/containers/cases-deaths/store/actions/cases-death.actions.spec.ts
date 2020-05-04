import { loadCasesDeath, CasesActionTypes } from './cases-death.actions';

describe('loadCasesDeaths', () => {
  it('should return an action', () => {
    expect(loadCasesDeath().type).toBe(CasesActionTypes.load);
  });
});
