import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashlayoutComponent } from './dashlayout.component';

describe('DashlayoutComponent', () => {
  let component: DashlayoutComponent;
  let fixture: ComponentFixture<DashlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
