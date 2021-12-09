import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { range } from 'lodash';

import { ApiService } from 'src/app/services/api.service';
import user from './user.json'

interface USERS {
  name: string,
  email: string,
  password: string,
  phonenumber: number,
  address: string,
  usertype: string,
  accessstoken: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  hide = true;
  loginData: any;
  Users = user;
  a: any;
  constructor(private fb: FormBuilder,
    private apimethod: ApiService,
    private router: Router) {
    console.log(this.Users)
  }


  ngOnInit(): void {
    this.login = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.required,

      ]]
    })
  }


  loginSubmit(form: FormGroup) {
    console.log(this.login)
    if (this.login.status == "VALID") {
      

      for (let i in this.Users) {
        if (this.login.value.email == this.Users[i].email && this.login.value.password == this.Users[i].password) {

          this.a = true
          // this.router.navigate(['/alloy-scrap/history/fileDetails/'])
        }
        else{
          this.apimethod.popupMessage('error','wrong,Enter again!!')
        }
      }
        }
        else {
          this.apimethod.popupMessage('error','Invalid Details')
        }  
        
        console.log(this.login.status)
      
      


      // for (let i in this.Users) {
      //   if (this.login.value.email == this.Users[i].email && this.login.value.password == this.Users[i].password) {

      //     this.a = true
      //     // this.router.navigate(['/alloy-scrap/history/fileDetails/'])

      //   }
      //   else {
      //     this.apimethod.popupMessage('error', 'Somthing went worng!!')
      //   }
      if (this.a == true) {
        this.apimethod.popupMessage('success', 'Login Successfull!!')
        this.router.navigate(['/alloy-scrap/upload/'])
      }



    

    // console.log(this.Users[0].email)
    // console.log(this.login)


    // this.loginData = this.login

    // if (this.login.valid == true) {
    //   this.apimethod.popupMessage('success', 'good')
    // }
    // else {
    //   this.apimethod.popupMessage('error', 'error')

    // if(this.login.status == 'VALID'){
    //   this.apimethod.popupMessage('success', 'Login Succes')
    // }
    // else{
    //   this.apimethod.popupMessage('error', 'Login Failed')
    // }

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
  // }

}
