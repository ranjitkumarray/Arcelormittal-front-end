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
  emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
  constructor(private fb: FormBuilder,
    private apimethod: ApiService,
    private router: Router) {
    console.log(this.Users)
  }


  ngOnInit(): void {
    this.login = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ]],
      'password': ['', [
        Validators.required,

      ]]
    })
  }


  loginSubmit(form: FormGroup) {
    console.log(this.login)
    if (this.login.status == "VALID") {
      let loginData = this.login.value
      this.Users.forEach((element: any) => {
        let elmt = {
          email: element.email,
          password: element.password
        }
        console.log('elmt',elmt)
        if (JSON.stringify(loginData) === JSON.stringify(elmt)) {
          console.log(element, "success")
          localStorage.setItem('userDetails',JSON.stringify(element))
          this.router.navigate(['/alloy-scrap/upload/'])
        }
      });

      // for (let i in this.Users) {
      //   var loginDetail = this.login.value;
      //   this.Users.forEach((element: any, index: any) => {

      //     if (loginDetail.email === element[index].email && loginDetail.password === element[index].password) {
      //       console.log('success')
      //     }

      //   });
      //   if (this.login.value.email == this.Users[i].email && this.login.value.password == this.Users[i].password) {

      //     this.a = true
      //     this.router.navigate(['/alloy-scrap/upload/'])
      //   }
      //   else {
      //     this.apimethod.popupMessage('error', 'wrong,Enter again!!')
      //   }
      // }
    }
    else {
      this.apimethod.popupMessage('error', 'Invalid Details')
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
      // this.router.navigate(['/alloy-scrap/upload/'])
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
