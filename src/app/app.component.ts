// Dependencies
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {CasesService} from './containers/cases-confirmed/services/cases.service';
import {CasesDeathService} from './containers/cases-deaths/services/cases-death.service';
import {CasesRecoveredService} from './containers/cases-recovered/services/cases-recovered.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private readonly casesConfimedService: CasesService,
    private readonly casesDeathService: CasesDeathService,
    private readonly casesRecoveredService: CasesRecoveredService,
  ) {
    ['facebook', 'github', 'linkedin', 'twitter'].forEach((icon) => {
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.casesConfimedService.loadCases();
    this.casesDeathService.loadCases();
    this.casesRecoveredService.loadCases();
  }
}
