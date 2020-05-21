import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryReportComponent } from './summary-report.component';
import {MatCardModule} from '@angular/material/card';
import {CardModule} from '../../components/card/card.module';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [SummaryReportComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CardModule,
    MatTabsModule,
  ],
})
export class SummaryReportModule { }
