// Dependencies
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Services
import { CasesService } from './services/cases.service';

// Components
import { CasesConfirmedComponent } from './cases-confirmed.component';

// Mocks
import { CasesServiceMock } from './services/cases-service-mock';

describe('CasesConfirmedComponent', () => {
  let component: CasesConfirmedComponent;
  let fixture: ComponentFixture<CasesConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesConfirmedComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CasesService, useClass: CasesServiceMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
