// Dependencies
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// config
import { environment } from '../../environments/environment';

interface IQueryParams {
  name: string;
  value: string;
}

interface IReport {
  total: number;
  name: string;
  count: number;
}

interface ICovidResponse {
  _id: string;
  date: Date;
  city: string;
  state: string;
  attention: string;
  age: string;
  gender: string;
  type: string;
  origin_country: string;
  death_date: string;
  recovered_date: string;
  fis: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private readonly reportUrl = environment.api.getUrl('reportsV2');

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  private getQueryParams(queryParams: IQueryParams[]): string {
    let result;
    if (queryParams && queryParams.length > 0) {
      let params = new HttpParams();
      queryParams
        .forEach((item) => {
          params = params.set(item.name, item.value);
        });
      result = `?${params.toString()}`;
    }
    return result;
  }

  public getReports(queryParams?: IQueryParams[]): Observable<any[]> {
    const params = this.getQueryParams(queryParams);
    let url = this.reportUrl;
    if (params) { url += params; }
    return this.http.get<any[]>(url);
  }
}
