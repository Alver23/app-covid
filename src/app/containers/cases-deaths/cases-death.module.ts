// Dependencies
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

// Redux
import { CasesDeathFeatureKey, reducer } from './store/reducers/cases-death.reducer';
import { CasesDeathEffects } from './store/effects/cases-death.effects';

// Components
import { CasesDeathComponent } from './cases-death.component';

// Modules
import { CardModule } from '../../components/card/card.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CardListModule } from '../../components/card-list/card-list.module';



@NgModule({
  declarations: [CasesDeathComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CasesDeathFeatureKey, reducer),
    EffectsModule.forFeature([CasesDeathEffects]),
    CardModule,
    MatTabsModule,
    CardListModule
  ],
  exports: [CasesDeathComponent],
})
export class CasesDeathModule { }
