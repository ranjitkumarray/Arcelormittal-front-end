import { Location } from "@angular/common";
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
  test=true

  emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
  loadingRouteConfig: boolean = false;
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
  }

  loginSubmit() {
    if (this.login.status == "VALID") {
      this.loadingRouteConfig = true
      this.apimethod.get_request_Param(this.apiString.userAccess.login, this.login.value).subscribe(result => {
        localStorage.setItem('arc-userDetails', JSON.stringify(result))
        this.loadingRouteConfig = false
        this.apimethod.popupMessage('success', 'Login Successfuly!!')
        
        console.log(document.referrer)
        if (document.referrer != '') {
          // Logic
          if(this.test=true){
            this.loadingRouteConfig=true
            console.log(this.test)
            setTimeout(()=>{
              window.location.reload(),
              this.loadingRouteConfig=false,
              this.test=false,
              console.log(this.test)
            }, 1000); 
            // this.location.back()            
          }

          this.location.back()
        } else {
          //Logic
          if(this.test=true){
            this.loadingRouteConfig=true
            console.log(this.test)
            setTimeout(()=>{
              window.location.reload(),
              this.loadingRouteConfig=false,
              this.test=false,
              console.log(this.test)
            }, 1000);
            // this.router.navigate(['/alloy-scrap/upload/'])          
          }

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
}


