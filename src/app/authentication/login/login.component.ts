import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginmodal } from './login.modal';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login:any=FormGroup;
user:loginmodal=new loginmodal();
hide=true;
email:any;
password:any;

 
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({
     'email':[this.user.email,[
      Validators.required,
      Validators.email
     ]],
     'password':[this.user.password,[
      Validators.required
     ]]
    })
  }
 
loginSubmit(data:any){
console.log(data);
}

}
