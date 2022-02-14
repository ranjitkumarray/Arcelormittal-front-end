import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ActivatedRoute,Router } from '@angular/router';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPassword:any=FormGroup;
resultData:any
user_id:any
  constructor(private _formbuilder: FormBuilder,
    private apiMethod: ApiService,
    private apiString: CitGlobalConstantService,
    private router: Router,
    private route:ActivatedRoute) { 

      this.resetPassword = this._formbuilder.group({
        'NewPassword': ['', [
          Validators.required,Validators.minLength(5)
        ]],
        'ConfirmPassword': ['', [
          Validators.required,Validators.minLength(5)
  
        ]]
      })
    }

  ngOnInit(): void {
    // this.category=this.router.url
    //   console.log('Category = ',this.category)

    this.route.queryParams
      .subscribe(params => {
        this.user_id = params.user_id;
        console.log('category = ', this.user_id);
      })
  }

  
  reset() {
    if(this.resetPassword.status=="VALID"){
      if(this.resetPassword.value.NewPassword == this.resetPassword.value.ConfirmPassword){
        let token ={
          encrypt_user_id : this.user_id ,
          new_password : this.resetPassword.value.NewPassword
        }
        this.apiMethod.get_request_Param(this.apiString.userAccess.reset_password, token).subscribe(result=>{
          this.resultData=result
          this.apiMethod.popupMessage('success',this.resultData.status)
        },error=>{
          console.log(error)
          this.apiMethod.popupMessage('error','New Password is Not-updated')
        })
                
      }
      else {
        this.apiMethod.popupMessage('error','Password is Not matched')
      }
    }
    else {
      this.apiMethod.popupMessage('error','Min length shoulb be 5')
    }  
    
  }

}
