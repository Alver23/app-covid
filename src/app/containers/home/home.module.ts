import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {CasesConfirmedModule} from '../cases-confirmed/cases-confirmed.module';
import {MatDividerModule} from '@angular/material/divider';
import {CasesRecoveredModule} from '../cases-recovered/cases-recovered.module';
import {CasesDeathModule} from '../cases-deaths/cases-death.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CasesConfirmedModule,
    MatDividerModule,
    CasesRecoveredModule,
    CasesDeathModule,
  ]
})
export class HomeModule { }
