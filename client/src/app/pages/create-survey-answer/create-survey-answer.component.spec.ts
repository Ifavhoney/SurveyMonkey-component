import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyAnswerComponent } from './create-survey-answer.component';

describe('CreateSurveyAnswerComponent', () => {
  let component: CreateSurveyAnswerComponent;
  let fixture: ComponentFixture<CreateSurveyAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSurveyAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
