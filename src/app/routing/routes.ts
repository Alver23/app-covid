import { Routes } from '@angular/router';
import {HomeComponent} from '../containers/home/home.component';
import {SummaryReportComponent} from '../containers/summary-report/summary-report.component';
import {ReportResolverService} from '../containers/summary-report/services/report-resolver.service';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'report/:type/:value',
    component: SummaryReportComponent,
    resolve: {
      report: ReportResolverService,
    }
  },
  { path: '**', redirectTo: '' }
];
