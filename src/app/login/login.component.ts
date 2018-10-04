import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TComponent } from '../t/t.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'EMS Log In';
  angForm;
  private showPass: string = 'password';
  constructor(private fb: FormBuilder,private router: Router) { 
  }
  
  ngOnInit() {
    this.angForm = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.maxLength(20)]),
      password: new FormControl("", [Validators.required,Validators.pattern('^[A-Za-z0-9!@#$%^&*()_-]{6,20}$')])
   });
  }
  public onLoginClick(){
    this.router.navigate(['./api/viewEmployees']);
}


 showPassword(value) {
   console.log(value);
   if(value){
     this.showPass = 'text';
   }else {
     this.showPass = 'password';
   }

}
}
