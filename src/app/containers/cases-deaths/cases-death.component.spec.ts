// Dependencies
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Services
import { CasesDeathService } from './services/cases-death.service';

import { CasesDeathComponent } from './cases-death.component';

// Mocks
import { CasesServiceMock } from './services/cases-service-mock';

describe('CasesDeathComponent', () => {
  let component: CasesDeathComponent;
  let fixture: ComponentFixture<CasesDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesDeathComponent ],
      providers: [
        { provide: CasesDeathService, useClass: CasesServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
