import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyDeactivateComponent } from './create-survey-deactivate.component';

describe('CreateSurveyDeactivateComponent', () => {
  let component: CreateSurveyDeactivateComponent;
  let fixture: ComponentFixture<CreateSurveyDeactivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSurveyDeactivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
