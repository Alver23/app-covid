// Dependencies
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Modules
import { CasesModule } from './containers/cases/cases.module';

import { extModules } from './build-specifics';

// Components
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CasesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    extModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
