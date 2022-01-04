import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';

import { ApiService } from 'src/app/services/api.service';
import user from './user.json';

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
  loadingRouteConfig: boolean = false;
  constructor(private fb: FormBuilder,
    private apimethod: ApiService,
    private apiString: CitGlobalConstantService,
    private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      'email': ['', [
        Validators.required
      ]],
      'password': ['', [
        Validators.required,

      ]]
    })

    //Authentication
    if (localStorage.getItem('userDetails')) {
      this.router.navigate(['/alloy-scrap/upload'])
    }
    else {
      this.router.navigate(['/auth/login'])
    }
  }


  loginSubmit() {
    if (this.login.status == "VALID") {
      let loginData = this.login.value
      let body = {
        username: loginData.email,
        password: loginData.password
      }
      this.loadingRouteConfig = true
      this.apimethod.get_request_Param(this.apiString.userAccess.login, body).subscribe(result => {
        this.loadingRouteConfig = false
        this.apimethod.popupMessage('success', 'Login Successfuly!!')
        this.router.navigate(['/alloy-scrap/upload/'])
        localStorage.setItem('userDetails', JSON.stringify(result))

      }, error => {
        this.loadingRouteConfig = false
        this.apimethod.popupMessage('error', 'Invalid Details')


      })
    } else {
      this.apimethod.popupMessage('error', 'Invalid Details')
    }
  }
}


