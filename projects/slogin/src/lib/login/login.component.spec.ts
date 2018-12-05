import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentSeeker } from './login.component';

describe('LoginComponentSeeker', () => {
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
