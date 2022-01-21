import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ActivatedRoute,Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPassword:any=FormGroup;
resultData:any
category:any
  constructor(private _formbuilder: FormBuilder,
    private apiMethod: ApiService,
    private apiString: CitGlobalConstantService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPassword = this._formbuilder.group({
      'NewPassword': ['', [
        Validators.required,
      ]],
      'ConfirmPassword': ['', [
        Validators.required,

      ]]
    })

   
    // this.category=this.router.url
    //   console.log('Category = ',this.category)

    this.route.queryParams
      .subscribe(params => {
        this.category = params.user_id;
        console.log('category = ', this.category);
      })
  }

  
  reset() {
    if(this.resetPassword.value.NewPassword == this.resetPassword.value.ConfirmPassword){
      let token ={
        encrypt_user_id : this.category ,
        new_password : this.resetPassword
      }
      console.log(token)
      this.apiMethod.get_request_Param(this.apiString.userAccess.reset_password, token).subscribe(result=>{
        this.resultData=result
        if(this.resultData.status_code == 200){
          this.apiMethod.popupMessage('success',this.resultData.status)
        }
        else {
          this.apiMethod.popupMessage('error','Password is Not Updated')
        }
        
      })            
    }
    else {
      this.apiMethod.popupMessage('error','Password is Not matched')
    }
    
  }

}
