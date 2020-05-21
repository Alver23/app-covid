import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CovidService} from '../../../services/covid/covid.service';
import { ReportResponse } from '../../../services/covid/covid-service-interface';

@Injectable({
  providedIn: 'root',
})
export class ReportResolverService implements Resolve<any> {
  constructor(
    private readonly covidService: CovidService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReportResponse> {
    return this.covidService.getReport(route.paramMap.get('type'), route.paramMap.get('value'));
  }
}
