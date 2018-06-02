import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name
    });
  }

  ubdateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
      });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}