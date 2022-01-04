import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeStamp } from 'console';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword : any = FormGroup;
  constructor(private _formbuilder: FormBuilder,
              private apiMethod : ApiService,
              private apiString : CitGlobalConstantService) { }

  ngOnInit(): void {
    this.resetPassword = this._formbuilder.group({
      'NewPassword': ['',[Validators.required,Validators.pattern('[0-9]{8}')]],
      'ConfirmPassword': ['',[Validators.required,Validators.pattern('[0-9]{8}')]]
    })
  }
  reset(){
    console.log(this.resetPassword.value)
    this.apiMethod.get_request_Param(this.apiString.userAccess.reset_password,{NewPassword : this.resetPassword.value.NewPassword, ConfirmPassword : this.resetPassword.value.ConfirmPassword}).subscribe((result:any)=>{
      console.log(result)
      if(result.status==200){
        this.apiMethod.popupMessage('success',result.status)
      }
      else {
        this.apiMethod.popupMessage('error',result.status)
      }
    })
  }

}
