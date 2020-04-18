// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent],
})
export class CardModule { }
