// Dependencies
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

// Services
import { CasesDeathService } from './cases-death.service';

describe('CasesDeathService', () => {
  let service: CasesDeathService;
  let store: MockStore;

  const initialState = { loading: false, data: {} };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
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

  it('should get the cases of the store', () => {
    const spy = jest.spyOn(store, 'select');
    service.getCases$();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should get the loading of the store', () => {
    const spy = jest.spyOn(store, 'select');
    service.getLoading$();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
