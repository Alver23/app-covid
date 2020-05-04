// Dependencies
import { hot, cold } from 'jest-marbles';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Redux
import {loadCasesConfirmed, loadCasesConfirmedFailure, loadCasesConfirmedSuccess} from '../actions/cases-confirmed.actions';
import { CasesConfirmedEffects } from './cases-confirmed.effects';

// Services
import { CovidService } from '../../../../services/covid/covid.service';

// Mocks
import { CovidServiceMock } from '../../../../services/covid/covid-service-mock';

describe('CasesConfirmedEffects', () => {
  let actions$: Observable<any>;
  let effects: CasesConfirmedEffects;
  let covidService: CovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CasesConfirmedEffects,
        provideMockActions(() => actions$),
        { provide: CovidService, useClass: CovidServiceMock },
      ]
    });

    effects = TestBed.get<CasesConfirmedEffects>(CasesConfirmedEffects);
    covidService = TestBed.get<CovidService>(CovidService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadCasesConfirmed effects', () => {
    it('should get a response successfully', () => {
      const response = { total: 1, casesByCity: [{ name: 'fake', total: 1}], casesByState: [{ name: 'fake', total: 1}] };
      const action = loadCasesConfirmed();
      const completion = loadCasesConfirmedSuccess({ data: response });
      jest.spyOn(covidService, 'getCases').mockReturnValue(of(response));
      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesConfirmed$).toBeObservable(expected);
    });

    it('should get an error', () => {
      const response: Error = new Error();
      const action = loadCasesConfirmed();
      const completion = loadCasesConfirmedFailure({ error: response });

      jest.spyOn(covidService, 'getCases').mockReturnValue(throwError(response));

      actions$ = hot('--a-', { a: action });
      const expected = cold('--(b)', { b: completion });
      expect(effects.loadCasesConfirmed$).toBeObservable(expected);
    });
  });
});
