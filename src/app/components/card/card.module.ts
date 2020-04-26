// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ScrollingModule,
    MatDividerModule,
  ],
  exports: [CardComponent],
})
export class CardModule { }
