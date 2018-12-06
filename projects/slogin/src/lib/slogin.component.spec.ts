import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SloginComponent } from './slogin.component';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('SloginComponent', () => {
  let component: SloginComponent;
  let fixture: ComponentFixture<SloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SloginComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
