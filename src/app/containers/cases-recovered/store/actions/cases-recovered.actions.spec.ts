import { loadCasesRecovered, CasesActionTypes } from './cases-recovered.actions';

describe('loadCasesRecovereds', () => {
  it('should return an action', () => {
    expect(loadCasesRecovered().type).toBe(CasesActionTypes.load);
  });
});
