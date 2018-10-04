import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

import {Router, ActivatedRoute} from '@angular/router';
import {IEmployee} from './../model/employee.model';
import { isArray } from 'util';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',


  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    // console.log('iam employee component ')


   public selectedEmployee: IEmployee;
  public selectedAnotherEmployee: IEmployee;
   public  editEmployee: IEmployee;
   public  isSelectedAnother = false;
   public editEmployeeFlag = false;
  public employees = [];
  public showAddEmp = false;
  isEmpNotFound: Boolean = true;

  isEmpDeleted: Boolean = false;



  public loadedEmp: IEmployee;


  constructor(private _employeeService: EmployeeService, private router: Router, private activateRoute: ActivatedRoute) {
         // this._todos = <BehaviorSubject<Todo[]>>new BehaviorSubject([]);

   }


  ngOnInit() {

    this._employeeService.myService.subscribe((data) => {
       this.getEmployees();
    }, error => console.log('Could not subscribe.'));
    this.getEmployees();
  }

  getEmployees() {
     this._employeeService.getEmployees()
     .subscribe((data) => {
       //console.log("getEmployees 1", data)
       this.employees = data;
   } );
  }


  onSelect(employee) {

   // this.router.navigate(['/api/viewEmployees', {userName: employee.userName}]);
     this.router.navigate([employee.userName], {relativeTo: this.activateRoute});
  }



  onSelectHere(employee: IEmployee): void {
    this.selectedEmployee = employee;
  }

  onSelectAnother(employee) {
    this.isSelectedAnother = true;
    this.selectedAnotherEmployee = employee;
  }

  edit(employee) {
   this.editEmployeeFlag = true;
   this.showAddEmp = false;
 //  this.isNewEmpAdded = false;
   this.editEmployee = employee;
  }

  addEmployee() {
   this.showAddEmp = true;
   this.editEmployeeFlag = false;
}

   receiveMessage($event) {
    this.employees = $event;
  }

  delete(employee) {
    
    this._employeeService.deleteEmployee(employee.empNo)
    .subscribe((data) => {
        console.log("deleted successfully ", data);
        
        this._employeeService.myService.emit(employee);
      },
        error => {
            console.log("Error while subscribing data", error)
        });
    
  }



}
