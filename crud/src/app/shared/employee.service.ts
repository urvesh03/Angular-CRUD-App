import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [
    {
        name: 'Urvesh',
        designation: 'Software Dev',
        salary: 10000
    },
    {
        name: 'Riya',
        designation: 'Admin',
        salary: 5000
    },
    {
        name: 'Vikram',
        designation: 'Business Analyst',
        salary: 15000
    },
    {
        name: 'Yogesh',
        designation: 'CEO',
        salary: 75000
    },
    {
        name: 'Sapna',
        designation: 'HR',
        salary: 12500
    }
]

  constructor(private http: HttpClient ) { }

  emitEdittedUser = new EventEmitter<Employee>();
  emitUserlist = new EventEmitter<any>();

  getEmployees(): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  getEmployeesEdit(empName): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  deleteEmployee(empId) {
    const employeeData = this.http.delete('/assets/employee.json');
    return employeeData;
  }

  createEmployee(empData: Employee) {
    return this.http.post('/assets/employee.json/', empData);
  }
}
