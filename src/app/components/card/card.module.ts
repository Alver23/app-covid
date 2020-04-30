// Dependencies
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { CardComponent } from './card.component';


import localeEs from '@angular/common/locales/es-CO';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

registerLocaleData(localeEs, 'es-CO');


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatDividerModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  exports: [CardComponent],
})
export class CardModule { }
