import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  empDetails = [];
  edittedUser: Employee;

  constructor(private empService: EmployeeService, private router: Router) {
    // this.empService.emitEdittedUser.subscribe((resData) => {
    //   return this.empDetails.push(resData);
    // });
  }

  ngOnInit() {
    this.empDetails = this.empService.employeeList;
  }

  getEmployeeData() {
    this.empService.getEmployees().subscribe((empData) => {
      const employeeData = [];
      employeeData.push(...empData);
      this.empDetails = employeeData;
    });
  }

  deleteEmployee(empID) {
    if (confirm('Are you sure to delete the Employee')) {

      // this.empService.deleteEmployee(empID).subscribe((data) => {
      //   console.log('deleted data here' + data);
      //   this.getEmployeeData();
      // }, error => console.log(error));

      if (empID > -1) {
        return this.empDetails.splice(empID, 1);
      }
    }
  }

  editEmployee(empInd) {
    // this.empService.getEmployeesEdit(empId).subscribe((empData) => {
    //   const editUSer = empData.filter((eachUser) => {
    //     return (eachUser.id === empId);
    //   });
    //   this.edittedUser = editUSer[0];
    //   this.router.navigate(['/editEmployee', this.edittedUser.id]);
    //   // this.empService.emitEdittedUser.emit(this.edittedUser);
    // }, error => console.log(error));
    this.edittedUser = this.empDetails[empInd];
    const modiName = this.edittedUser.name.split(' ').join('_');
    this.router.navigate(['/editEmployee', modiName, empInd]);
  }
}
