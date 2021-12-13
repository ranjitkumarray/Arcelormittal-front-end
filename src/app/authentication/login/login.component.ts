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

    if (this.login.status == "VALID") {
      let loginData = this.login.value
      this.Users.forEach((element: any) => {
        let elmt = {
          email: element.email,
          password: element.password
        }
        // console.log('elmt', elmt)
        if (JSON.stringify(loginData) === JSON.stringify(elmt)) {
          console.log(element, "success")
          localStorage.setItem('userDetails', JSON.stringify(element))
          // this.router.navigate(['/alloy-scrap/upload/'])
        }
        else{
          this.apimethod.popupMessage('error','Error in Login!!')
        }
      });

    }
    else {
      this.apimethod.popupMessage('error', 'Invalid Details')
    }

    console.log(this.login.status)

  }

}
