// Dependencies
import { hot, cold } from 'jest-marbles';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Redux
import { CasesDeathEffects } from './cases-death.effects';
import { loadCasesDeath, loadCasesDeathFailure, loadCasesDeathSuccess } from '../actions/cases-death.actions';

// Services
import { CovidService } from '../../../../services/covid/covid.service';


// Mocks
import { CovidServiceMock } from '../../../../services/covid/covid-service-mock';

describe('CasesDeathEffects', () => {
  let actions$: Observable<any>;
  let effects: CasesDeathEffects;
  let covidService: CovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CasesDeathEffects,
        provideMockActions(() => actions$),
        { provide: CovidService, useClass: CovidServiceMock },
      ]
    });

    effects = TestBed.get<CasesDeathEffects>(CasesDeathEffects);
    covidService = TestBed.get<CovidService>(CovidService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadCasesDeath effects', () => {
    it('should get a response successfully', () => {
      const response = { total: 1, casesByCity: [{ name: 'fake', total: 1}], casesByState: [{ name: 'fake', total: 1}] };
      const action = loadCasesDeath();
      const completion = loadCasesDeathSuccess({ data: response });
      jest.spyOn(covidService, 'getCasesDeaths').mockReturnValue(of(response));
      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesDeath$).toBeObservable(expected);
    });

    it('should get an error', () => {
      const response: Error = new Error();
      const action = loadCasesDeath();
      const completion = loadCasesDeathFailure({ error: response });

      jest.spyOn(covidService, 'getCasesDeaths').mockReturnValue(throwError(response));

      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesDeath$).toBeObservable(expected);
    });
  });
});
