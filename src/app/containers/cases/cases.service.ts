// Dependencies
import { Injectable } from '@angular/core';

// Services
import { CovidService } from '../../services/covid.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class CasesService {

  constructor(
    private readonly covidService: CovidService,
  ) { }

  getCases(): Observable<any> {
    return this.covidService
      .getReports()
      .pipe(
        map(items => {
          let response;
          if (items && Array.isArray(items)) {
            response = items[0];
          }
          return response;
        }),
      );
  }

  getCasesByCity(): Observable<any> {
    const queryParams = [
      {name: 'type', value: 'city'},
    ];
    return this.covidService
      .getReports(queryParams);
  }

  getCasesByState(): Observable<any> {
    const queryParams = [
      {name: 'type', value: 'state'},
    ];
    return this.covidService
      .getReports(queryParams);
  }

  getTotalAttention(): Observable<any> {
    const queryParams = [
      {name: 'type', value: 'attention'},
    ];
    return this.covidService
      .getReports(queryParams);
  }

  getCasesByAttention(value: string): Observable<any> {
    const queryParams = [
      {name: 'type', value: 'city'},
      {name: 'field', value: 'attention'},
      {name: 'value', value},
    ];
    return this.covidService
      .getReports(queryParams);
  }


}
