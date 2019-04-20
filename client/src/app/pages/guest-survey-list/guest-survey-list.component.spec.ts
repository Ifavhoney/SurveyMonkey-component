import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSurveyListComponent } from './guest-survey-list.component';

describe('GuestSurveyListComponent', () => {
  let component: GuestSurveyListComponent;
  let fixture: ComponentFixture<GuestSurveyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSurveyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
