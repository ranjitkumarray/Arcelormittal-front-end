import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup } from '@angular/forms';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  loadingRouteConfig : boolean = false;
  checking : boolean = false;
  ForgotPassword : any = FormGroup;
  resultData : any;
  emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{3,4}$";
  constructor(private _formbuilder:FormBuilder,
              private apiMethod:ApiService,
              private apiString : CitGlobalConstantService,
              private router : Router
              ) { }

  ngOnInit(): void {
    this.ForgotPassword=this._formbuilder.group({
      'email':['',[Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ]]
    })
  }
  forgotPassword(){
    let param = this.ForgotPassword.value;
    console.log(param)
    if (this.ForgotPassword.status == "VALID") {
      this.loadingRouteConfig = true;
      this.checking = true;
      this.apiMethod.get_request_Param(this.apiString.userAccess.forgot_password, param).subscribe(result => {
        this.resultData = result
        this.loadingRouteConfig = false
        if(this.resultData.status == "success"){
          this.router.navigate(['/auth/reset-password'])
        }
        else {
          this.apiMethod.popupMessage('error','Email is not exist')
        }
        
      })
    }
    else {
      this.checking = false;
      this.apiMethod.popupMessage('error','Please enter valid email')
    }
    
  }

}

