// Dependencies
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

// Services
import { CasesService } from './cases.service';

describe('CasesService', () => {
  let service: CasesService;
  let store: MockStore;

  const initialState = { loading: false, data: {} };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ]
    });
    service = TestBed.inject(CasesService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do a dispatch', () => {
    const spy = jest.spyOn(store, 'dispatch');
    service.loadCasesConfirmed();
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
