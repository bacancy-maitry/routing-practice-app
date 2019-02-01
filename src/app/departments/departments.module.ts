import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { BcaDepartmentComponent } from './bca-department/bca-department.component';
import { McaDepartmentComponent } from './mca-department/mca-department.component';
import { MbaDepartmentComponent } from './mba-department/mba-department.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ],
  declarations: [DepartmentsListComponent, BcaDepartmentComponent, McaDepartmentComponent, MbaDepartmentComponent]
})
export class DepartmentsModule { }
