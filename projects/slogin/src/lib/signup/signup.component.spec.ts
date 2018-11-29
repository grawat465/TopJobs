import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponentSeeker } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponentSeeker;
  let fixture: ComponentFixture<SignupComponentSeeker>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponentSeeker ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
