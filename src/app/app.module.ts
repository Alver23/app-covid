// Dependencies
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { extModules } from './build-specifics';
import { RoutingModule } from './routing/routing.module';

// Components
import { AppComponent } from './app.component';

// Environment
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import {HeaderModule} from './components/header/header.module';
import {MatListModule} from '@angular/material/list';
import {HomeModule} from './containers/home/home.module';
import {SummaryReportModule} from './containers/summary-report/summary-report.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    extModules,
    DeviceDetectorModule.forRoot(),
    MatIconModule,
    RoutingModule,
    HeaderModule,
    MatListModule,
    HomeModule,
    SummaryReportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
