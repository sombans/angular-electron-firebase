import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shares/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {

  }

}
