import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TComponent } from './t/t.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PageNotfoundComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
