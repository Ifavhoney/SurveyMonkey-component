import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyDeleteComponent } from './create-survey-delete.component';

describe('CreateSurveyDeleteComponent', () => {
  let component: CreateSurveyDeleteComponent;
  let fixture: ComponentFixture<CreateSurveyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSurveyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
