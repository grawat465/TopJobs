import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationdetailsformComponent } from './educationdetailsform.component';

describe('EducationdetailsformComponent', () => {
  let component: EducationdetailsformComponent;
  let fixture: ComponentFixture<EducationdetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationdetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
