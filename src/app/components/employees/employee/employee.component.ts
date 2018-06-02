import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shares/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public employeeService: EmployeeService,
    public tostrService: ToastrService,
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    this.employeeService.insertEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.tostrService.success('Prijavljen uspesno ', 'novi radnik dodat');

  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) {
      employeeForm.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
    };
  }

}
