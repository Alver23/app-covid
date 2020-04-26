import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Dependencies
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

// Components
import { CasesComponent } from './cases.component';

// Services
import { CasesService } from './cases.service';

// Modules
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CardModule,
    MatTabsModule,
    MatGridListModule,
  ],
  providers: [
    CasesService,
  ],
  exports: [CasesComponent]
})
export class CasesModule { }
