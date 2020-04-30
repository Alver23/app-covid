// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardListComponent } from './card-list.component';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';



@NgModule({
  declarations: [CardListComponent],
  exports: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatDividerModule,
    MatListModule,
    NgxSkeletonLoaderModule,
  ]
})
export class CardListModule { }
