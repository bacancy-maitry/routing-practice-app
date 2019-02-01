import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McaDepartmentComponent } from './mca-department.component';

describe('McaDepartmentComponent', () => {
  let component: McaDepartmentComponent;
  let fixture: ComponentFixture<McaDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McaDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McaDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
