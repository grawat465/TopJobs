import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployersComponent } from './view-all-employers.component';

describe('ViewAllEmployersComponent', () => {
  let component: ViewAllEmployersComponent;
  let fixture: ComponentFixture<ViewAllEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
