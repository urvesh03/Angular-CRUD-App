import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {

  employee: Employee = new Employee();
  dataSubmitted = false;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.employee = formData.value;
    this.empService.employeeList.push(this.employee);
    // this.empService.createEmployee(this.employee).subscribe(data => console.log(data),
    // error => console.log(error));
    // this.employee = new Employee();
    // this.router.navigate(['/viewEmployee']);
    // this.dataSubmitted = true;
    // this.empService.emitEdittedUser.emit(this.employee);
    this.router.navigate(['/viewEmployee']);
  }

}
