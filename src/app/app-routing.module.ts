import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsFormComponent } from './about-us/about-us-form/about-us-form.component';

const routes: Routes = [
  {
    path: 'departments',
    loadChildren: './departments/departments.module#DepartmentsModule',
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    children: [
      {
        path: '',
        redirectTo: 'aboutus',
        pathMatch: 'full',
      },
      {
        path: 'aboutusform',
        component: AboutUsFormComponent,
        children: [
          {
            path: '',
            redirectTo: 'aboutusform',
            pathMatch: 'full',
          },
          {
            path: 'contactus/:id',
            component: ContactUsComponent,
            pathMatch: 'full'
          }
        ]
      },
    ]
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []

})

export class AppRoutingModule { }
