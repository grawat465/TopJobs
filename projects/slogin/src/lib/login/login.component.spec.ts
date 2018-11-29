import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentSeeker } from './login.component';

<<<<<<< HEAD
describe('LoginComponent', () => {
=======
describe('LoginComponentSeeker', () => {
>>>>>>> b494475c51f8752974e329ddde2d601bfaed6bdf
  let component: LoginComponentSeeker;
  let fixture: ComponentFixture<LoginComponentSeeker>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponentSeeker ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentSeeker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
