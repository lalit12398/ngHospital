import { Component, OnInit } from '@angular/core';
import { Departments } from '../models/departments.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public dept: Departments;
  constructor() {
    this.dept = new Departments();
  }

  ngOnInit() {
    console.log(this.dept.departments);
  }

}
