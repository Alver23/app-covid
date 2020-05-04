// Dependencies
import { hot, cold } from 'jest-marbles';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Redux
import { CasesRecoveredEffects } from './cases-recovered.effects';
import { loadCasesRecovered, loadCasesRecoveredFailure, loadCasesRecoveredSuccess } from '../actions/cases-recovered.actions';

// Services
import { CovidService } from '../../../../services/covid/covid.service';

describe('CasesRecoveredEffects', () => {
  let actions$: Observable<any>;
  let effects: CasesRecoveredEffects;
  let covidService: CovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CasesRecoveredEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CasesRecoveredEffects>(CasesRecoveredEffects);
    covidService = TestBed.get<CovidService>(CovidService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadCasesRecovered effects', () => {
    it('should get a response successfully', () => {
      const response = { total: 1, casesByCity: [{ name: 'fake', total: 1}], casesByState: [{ name: 'fake', total: 1}] };
      const action = loadCasesRecovered();
      const completion = loadCasesRecoveredSuccess({ data: response });
      jest.spyOn(covidService, 'getCasesRecovered').mockReturnValue(of(response));
      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesRecovered$).toBeObservable(expected);
    });

    it('should get an error', () => {
      const response: Error = new Error();
      const action = loadCasesRecovered();
      const completion = loadCasesRecoveredFailure({ error: response });

      jest.spyOn(covidService, 'getCasesRecovered').mockReturnValue(throwError(response));

      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesRecovered$).toBeObservable(expected);
    });
  });
});
