// Dependencies
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { CasesRecoveredComponent } from './cases-recovered.component';

// Services
import { CasesRecoveredService } from './services/cases-recovered.service';

// Mocks
import { CasesServiceMock } from './services/cases-service-mock';

describe('CasesRecoveredComponent', () => {
  let component: CasesRecoveredComponent;
  let fixture: ComponentFixture<CasesRecoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesRecoveredComponent ],
      providers: [
        { provide: CasesRecoveredService, useClass: CasesServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
