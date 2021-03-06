// Dependencies
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

// Services
import { CasesDeathService } from './cases-death.service';
import { getCases, getLoading } from '../store/selectors/cases-death.selectors';

describe('CasesDeathService', () => {
  let service: CasesDeathService;
  let store: MockStore;

  const initialState = { loading: false, data: {} };
  const data = { total: 10, casesByCity: [{ name: 'Cali', total: 1 }], casesByState: [{ name: 'Cali', total: 1 }] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: getCases, value: data },
            { selector: getLoading, value: data },
          ],
        }),
      ],
    });
    service = TestBed.inject(CasesDeathService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do a dispatch', () => {
    const spy = jest.spyOn(store, 'dispatch');
    service.loadCases();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should get the cases of the store', (done) => {
    service.getCases$().subscribe((response) => {
      expect(response).toEqual(data);
      done();
    });
  });

  it('should get the loading of the store', (done) => {
    service.getLoading$().subscribe((response) => {
      expect(response).toBeTruthy();
      done();
    });
  });
});
