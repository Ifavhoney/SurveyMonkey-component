import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruehomepageComponent } from './truehomepage.component';

describe('TruehomepageComponent', () => {
  let component: TruehomepageComponent;
  let fixture: ComponentFixture<TruehomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruehomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
