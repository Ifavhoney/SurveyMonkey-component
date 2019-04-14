import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySurveyListComponent } from './display-survey-list.component';

describe('DisplaySurveyListComponent', () => {
  let component: DisplaySurveyListComponent;
  let fixture: ComponentFixture<DisplaySurveyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySurveyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
