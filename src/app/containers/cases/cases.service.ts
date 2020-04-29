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

  getTotalCases(): Observable<any> {
    const queryString = [
      { name : '$select', value: 'COUNT(*) as total' },
    ];
    return this.covidService
      .getReports(queryString)
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
    const queryString = [
      { name: '$select', value: 'ciudad_de_ubicaci_n as name,COUNT(*) as total' },
      { name: '$group', value: 'ciudad_de_ubicaci_n' },
      { name: '$order', value: 'total DESC' },
    ];
    return this.covidService
      .getReports(queryString);
  }

  getCasesByState(): Observable<any> {
    const queryParams = [
      { name: '$select', value: 'departamento as name,COUNT(*) as total' },
      { name: '$group', value: 'departamento' },
      { name: '$order', value: 'total DESC' },
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

  getCasesByAttention(value: string, field: string = 'ciudad_de_ubicaci_n'): Observable<any> {
    const queryParams = [
      { name: '$select', value: `${field} as name,COUNT(*) as total` },
      { name: '$group', value: field },
      { name: '$where', value: `atenci_n in('${value}')` },
      { name: '$order', value: 'total DESC' },
    ];
    return this.covidService
      .getReports(queryParams);
  }

  getTotalCasesByAttention(value: string) {
    const queryParams = [
      { name: '$select', value: 'COUNT(*) as total' },
      { name: '$where', value: `atenci_n in('${value}')` },
    ];
    return this.covidService
      .getReports(queryParams);
  }


}
