// Redux
import { CasesDeathFeatureKey } from '../reducers/cases-death.reducer';
import { selectCasesDeathState, getCases, getLoading } from './cases-death.selectors';

const createState = (data) => ({
  [CasesDeathFeatureKey]: {
    ...data,
  },
});

describe('CasesDeath Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCasesDeathState({
      [CasesDeathFeatureKey]: {}
    });

    expect(result).toEqual({});
  });

  it('should select of the cases', () => {
    const state = createState({ data: { total: 1 } });
    expect(getCases(state)).toHaveProperty('total', 1);
  });

  it('should select of the loading', () => {
    const state = createState({ loading: true });
    expect(getLoading(state)).toBeTruthy();
  });
});
