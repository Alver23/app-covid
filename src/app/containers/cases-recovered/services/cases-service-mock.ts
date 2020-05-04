// Dependencies
import { of } from 'rxjs';

export class CasesServiceMock {
  loadCases() {}
  getCases$() {
    return of({});
  }
  getLoading$() {
    return of(true);
  }
}
