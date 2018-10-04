import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {IEmployee} from './../../model/employee.model';

import {EmployeeService} from './../../services/employee.service';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

 public employees = [];
 @Input() employee: IEmployee;
  constructor(public _employeeService: EmployeeService, private http: HttpClient) { }

  ngOnInit() {
  }

  onEdit(employee) {
   console.log(employee);
    this.updateEmployee(employee);

  }

  updateEmployee(employee): void {
     this._employeeService.updateEmployee(employee.value)
     .subscribe((data) => {
           console.log("PUT Request is successful ", data);
            this._employeeService.myService.emit(data);
        },
        err => console.log("Error ", err)
      );
}
}
