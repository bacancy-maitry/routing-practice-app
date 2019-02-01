import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcaDepartmentComponent } from './bca-department.component';

describe('BcaDepartmentComponent', () => {
  let component: BcaDepartmentComponent;
  let fixture: ComponentFixture<BcaDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcaDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcaDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
