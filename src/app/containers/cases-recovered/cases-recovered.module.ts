// Dependencies
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

// Components
import { CasesRecoveredComponent } from './cases-recovered.component';

// Redux
import { CasesRecoveredEffects } from './store/effects/cases-recovered.effects';
import { casesRecoveredFeatureKey, reducer } from './store/reducers/cases-recovered.reducer';

// Modules
import { CardModule } from '../../components/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CardListModule } from '../../components/card-list/card-list.module';



@NgModule({
  declarations: [CasesRecoveredComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(casesRecoveredFeatureKey, reducer),
    EffectsModule.forFeature([CasesRecoveredEffects]),
    CardModule,
    MatTabsModule,
    CardListModule
  ],
  exports: [CasesRecoveredComponent],
})
export class CasesRecoveredModule { }
