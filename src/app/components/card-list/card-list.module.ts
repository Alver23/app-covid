// Dependencies
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

// Components
import { CardListComponent } from './card-list.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Pipes
import { SearchTextPipe } from '../../pipes/search-text/search-text.pipe';

@NgModule({
  declarations: [CardListComponent, SearchTextPipe],
  exports: [CardListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    MatTooltipModule,
  ],
})
export class CardListModule {}
