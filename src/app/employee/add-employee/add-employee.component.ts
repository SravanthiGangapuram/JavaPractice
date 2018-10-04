import { IEmployee } from './../../model/employee.model';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgForm} from '@angular/forms';

import {Observable} from 'rxjs/Observable';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in')
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])
  ]
})
export class AddEmployeeComponent implements OnInit {



  public newlyEmployees = [];

  public newlyEmployees1 = [];

  public employees = [];
  public employee: IEmployee;
  constructor(private http: HttpClient, private _employeeService: EmployeeService) { }


  ngOnInit() {

  }


    addEmploye(employee: any): any {
      return this._employeeService.addEmployee(employee.value)
      .subscribe((data) => {
            console.log("Post Request is successful ", data);
             this._employeeService.myService.emit(data);
        },
      err => console.error(err)
      );
    }


    submitAddForm(addForm: NgForm) {
     this.employee = this.addEmploye(addForm);
   //  this._employeeService.myService.emit(this.employee);

    }

}
