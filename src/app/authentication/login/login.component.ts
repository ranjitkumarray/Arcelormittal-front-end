import { Component, OnInit, Type } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, FormGroupName, RequiredValidator, Validators } from '@angular/forms';


import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login:any=FormGroup;
hide=true;
ot :any;
loginData :any;

  constructor(private fb:FormBuilder,
              private apimethod : ApiService ) { }

  
  
  ngOnInit(): void {
    this.login=this.fb.group({
     'email':['',[
      Validators.required,
      Validators.email
     ]],
     'password':['',[
      Validators.required,
      Validators.pattern
     ]]
    })
  }
  obj :any =[{"email":'sayeesh'}]
 
loginSubmit( form:FormControl){

      console.log(this.login) 
      this.loginData = this.login

      if(this.login.valid==true){
        this.apimethod.popupMessage('success','good')
      }
      else {
        this.apimethod.popupMessage('error','error')
      }

//   if(this.loginData.email != false && this.loginData.password != false)  {
//     this.apimethod.popupMessage('success', 'success')
//   }
//   else if(this.loginData.email == false && this.loginData.password != false){
//     this.apimethod.popupMessage('error', 'Email required')
//   }
//   else if(this.loginData.email != false && this.loginData.password == false){
//     this.apimethod.popupMessage('error', 'Password required')
//   }
//   else
//    {
//     this.apimethod.popupMessage('error','Email and Password required')
//   }
}

}
