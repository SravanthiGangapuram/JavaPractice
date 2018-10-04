import { AddEmployeeComponent } from './../employee/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {path : 'api/viewEmployees', component : EmployeeComponent},
 // {path : 'api/viewEmployees/:userName', component : ViewEmployeeDetailComponent},
  {path: 'api/addEmployees', component: AddEmployeeComponent},
  //{path: 'api/viewAllEmployee', component: ViewAnotherComponent},
  {path : '**', component : PageNotfoundComponent}
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
