// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetectorModule } from 'ngx-device-detector';

// Material Dependencies
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { CasesComponent } from './cases.component';

// Services
import { CasesService } from './cases.service';

// Modules
import { CardModule } from '../../components/card/card.module';
import { CardListModule } from '../../components/card-list/card-list.module';

@NgModule({
  declarations: [CasesComponent],
  imports: [
    CommonModule,
    CardModule,
    MatTabsModule,
    DeviceDetectorModule.forRoot(),
    MatDividerModule,
    CardListModule,
  ],
  providers: [
    CasesService,
  ],
  exports: [CasesComponent]
})
export class CasesModule { }
