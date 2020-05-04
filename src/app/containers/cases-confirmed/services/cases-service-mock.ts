// Dependencies
import { of } from 'rxjs';

export class CasesServiceMock {
  loadCasesConfirmed() {}
  getCases$() {
    return of({});
  }
  getLoading$() {
    return of(true);
  }
}
