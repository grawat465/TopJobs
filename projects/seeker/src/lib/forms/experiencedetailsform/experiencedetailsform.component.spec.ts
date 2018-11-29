import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedetailsformComponent } from './experiencedetailsform.component';

describe('ExperiencedetailsformComponent', () => {
  let component: ExperiencedetailsformComponent;
  let fixture: ComponentFixture<ExperiencedetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencedetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencedetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
