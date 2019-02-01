import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bca-department',
  templateUrl: './bca-department.component.html',
  styleUrls: ['./bca-department.component.css']
})
export class BcaDepartmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    // this.router.navigate(['/','departments','mca','']);
    this.router.navigateByUrl('/departments/mca/');
    // this.router.navigateByUrl('/departments',{skipLocationChange:true});
  }

}