// Dependencies
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

// Redux
import { casesConfirmedFeatureKey, reducer } from './store/reducers/cases-confirmed.reducer';
import { CasesConfirmedEffects } from './store/effects/cases-confirmed.effects';

// Components
import { CasesConfirmedComponent } from './cases-confirmed.component';

// Modules
import { CardModule } from '../../components/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CardListModule } from '../../components/card-list/card-list.module';

@NgModule({
  declarations: [CasesConfirmedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(casesConfirmedFeatureKey, reducer),
    EffectsModule.forFeature([CasesConfirmedEffects]),
    CardModule,
    MatTabsModule,
    CardListModule,
  ],
  exports: [CasesConfirmedComponent],
})
export class CasesConfirmedModule {}
