import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaDepartmentComponent } from './mba-department.component';

describe('MbaDepartmentComponent', () => {
  let component: MbaDepartmentComponent;
  let fixture: ComponentFixture<MbaDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbaDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbaDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
