import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpCreateComponent } from '../app/emp-create/emp-create.component';
import { EmpViewComponent } from '../app/emp-view/emp-view.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  {path: 'creatEmployee', component: EmpCreateComponent},
  {path: 'viewEmployee', component: EmpViewComponent},
  {path: 'editEmployee/:name/:id', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
