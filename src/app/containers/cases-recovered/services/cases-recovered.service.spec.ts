// Dependencies
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

// Services
import { CasesRecoveredService } from './cases-recovered.service';

describe('CasesRecoveredService', () => {
  let service: CasesRecoveredService;
  let store: MockStore;

  const initialState = { loading: false, data: {} };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
    });
    service = TestBed.inject(CasesRecoveredService);
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
