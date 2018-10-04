import { IEmployee } from './../model/employee.model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  private _URL: string = 'http://localhost:8080/api/viewEmployees';

  private _URL_BY_NAME: string = 'http://localhost:8080/api/viewEmployeeByName';

  private _URL_ADD: string = 'http://localhost:8080/api/addEmployee';

  private _URL_EDIT: string = 'http://localhost:8080/api/editEmployee';

  private _URL_DELETE: string = 'http://localhost:8080/api/deleteEmployee';

      myService=new EventEmitter<any>();
  constructor(private http: HttpClient) { }

   getEmployees(): Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>(this._URL);
   }

   getEmployeeByName(userName: string): Observable<IEmployee[]> {


    console.log('Usrnmae ', userName);
    const params = new HttpParams().set('empName', userName);
     return this.http.get<IEmployee[]>(this._URL_BY_NAME, {params});
   }


 updateEmployee(employee: IEmployee) : Observable<IEmployee> {
    return this.http.put<IEmployee>(this._URL_EDIT, employee);
  }


   addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this._URL_ADD, employee);
  }

  /*getEmployees(): Observable<any> {


   return this.http.get(this._URL)
   .map((response: Response) => {
   console.log(response);
   response = response.json();
   return response;
   });
  }*/

  deleteEmployee(empNo: string):  Observable<any> {
    const params = new HttpParams().set('empNo', empNo);
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(this._URL_DELETE, {params});
  }

}
