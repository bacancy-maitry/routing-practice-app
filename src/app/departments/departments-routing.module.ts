import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './departments-list.component';
import { BcaDepartmentComponent } from './bca-department/bca-department.component';
import { McaDepartmentComponent } from './mca-department/mca-department.component';
import { MbaDepartmentComponent } from './mba-department/mba-department.component';

const departmentsRoute: Routes = [
  {
    path: '',
    component: DepartmentsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'bca',
    component: BcaDepartmentComponent,
  },
  {
    path: 'mca/:id',
    component: McaDepartmentComponent,
  },
  {
    path: 'mba',
    component: MbaDepartmentComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(departmentsRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class DepartmentsRoutingModule { }
