// Dependencies
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Modules
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { CardListComponent } from './card-list.component';
import { SearchTextPipe } from '../../pipes/search-text/search-text.pipe';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent, SearchTextPipe],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ScrollingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
