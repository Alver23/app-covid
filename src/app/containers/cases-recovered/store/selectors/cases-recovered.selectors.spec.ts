// Redux
import { casesRecoveredFeatureKey } from '../reducers/cases-recovered.reducer';
import { selectCasesRecoveredState, getCases, getLoading } from './cases-recovered.selectors';

const createState = (data) => ({
  [casesRecoveredFeatureKey]: {
    ...data,
  },
});

describe('CasesRecovered Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCasesRecoveredState({
      [casesRecoveredFeatureKey]: {}
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
