import { Location } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';

import { ApiService } from 'src/app/services/api.service';
import user from './user.json';
import { NavItems } from 'src/app/common-use/sidebar/sidebar';

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
  navLink:any = NavItems
  main_bar = 'alloy-scrap/upload'
  sub_bar = 'smb/base-price/list'

  constructor(private fb: FormBuilder,
    private apimethod: ApiService,
    private apiString: CitGlobalConstantService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
    this.router.navigate(['alloy-scrap/upload'])
  }

  loginSubmit() {
    if (this.login.status == "VALID") {
      this.loadingRouteConfig = true
      this.apimethod.get_request_Param(this.apiString.userAccess.login, this.login.value).subscribe(result => {
        this.loadingRouteConfig = false
        this.apimethod.popupMessage('success', 'Login Successfuly!!')
        localStorage.setItem('arc-userDetails', JSON.stringify(result))
        console.log('document  = ' ,document.referrer)
        if (document.referrer != '') {
          this.location.back()
        } else {
          this.router.navigate(['/alloy-scrap/upload/'])
        }
      }, error => {
        console.log(error)
        this.loadingRouteConfig = false
        this.apimethod.popupMessage('error', 'Invalid Details')
      })
    } else {
      this.apimethod.popupMessage('error', 'Fill all required details')
    }
  }

  // loginSubmit() {
  //   if (this.login.status == "VALID") {
  //     this.loadingRouteConfig = true
  //     this.apimethod.get_request_Param(this.apiString.userAccess.login, this.login.value).subscribe(result => {
  //       this.loadingRouteConfig = false
  //       this.apimethod.popupMessage('success', 'Login Successfuly!!')
  //       localStorage.setItem('arc-userDetails', JSON.stringify(result))
  //       this.router.navigate(['smb/base-price/list'])
  //     }, error => {
  //       console.log(error)
  //       this.loadingRouteConfig = false
  //       this.apimethod.popupMessage('error', 'Invalid Details')
  //     })
  //   } else {
  //     this.apimethod.popupMessage('error', 'Fill all required details')
  //   }
  // }
}


