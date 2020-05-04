// Redux
import { casesConfirmedFeatureKey } from '../reducers/cases-confirmed.reducer';
import { selectCasesConfirmedState, getCases, getLoading } from './cases-confirmed.selectors';

const createState = (data) => ({
  [casesConfirmedFeatureKey]: {
    ...data,
  },
});

describe('CasesConfirmed Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCasesConfirmedState({
      [casesConfirmedFeatureKey]: {}
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
