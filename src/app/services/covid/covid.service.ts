// Dependencies
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// config
import { environment } from '../../../environments/environment';

interface Items {
  name: string;
  total: number;
}

interface CasesResponse {
  total: number;
  casesByCity: Items[];
  casesByState: Items[];
}

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private readonly casesUrl = environment.api.getUrl('cases');
  private readonly casesDeathsUrl = environment.api.getUrl('casesDeaths');
  private readonly casesRecoveredUrl = environment.api.getUrl('casesRecovered');

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getCases(): Observable<CasesResponse> {
    return this.http.get<CasesResponse>(this.casesUrl);
  }

  public getCasesRecovered(): Observable<CasesResponse> {
    return this.http.get<CasesResponse>(this.casesRecoveredUrl);
  }

  public getCasesDeaths(): Observable<CasesResponse> {
    return this.http.get<CasesResponse>(this.casesDeathsUrl);
  }
}
