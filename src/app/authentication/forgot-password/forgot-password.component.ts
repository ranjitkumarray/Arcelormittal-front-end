import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup } from '@angular/forms';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  loadingRouteConfig : boolean = false
  ForgotPassword: any = FormGroup;
  email_Pattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
  constructor(private _formbuilder : FormBuilder,
              private apimethod : ApiService,
              private apistring : CitGlobalConstantService,
              private router : Router) { }

  ngOnInit(): void {
    this.ForgotPassword=this._formbuilder.group({
      'email':['',[Validators.required,
        Validators.email,
        Validators.pattern(this.email_Pattern)
      ]]
    })
  
  }
  data :any
  reset_password(){
    // console.log(this.ForgotPassword.value.email)   
    this.apimethod.get_request_Param(this.apistring.userAccess.forgot_password, { email : this.ForgotPassword.value.email}).subscribe((result: any) => {
      console.log(result.status)
      if(result.status==='Valid Email'){
        this.apimethod.popupMessage('success',result.status)
        this.router.navigate(['/auth/reset-password'])
      }
      else {
        this.apimethod.popupMessage('error',result.status)
      }
  })
}

}
