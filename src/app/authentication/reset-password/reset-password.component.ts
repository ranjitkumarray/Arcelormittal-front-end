import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CitGlobalConstantService } from 'src/app/services/api-collection';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPassword:any=FormGroup;
  
  queryParam: any;
  constructor(private fb: FormBuilder,private apimethod:ApiService, private router: Router, private apiString: CitGlobalConstantService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((param: any) => {
      console.log("Record", param)
      this.queryParam = param
    })

    this.resetPassword = this.fb.group({
     'email': this.queryParam.email,
     'user_id':this.queryParam.user_id,
    
      'NewPassword': ['', [
        Validators.required,
      ]],
      'ConfirmPassword': ['', [
        Validators.required,

      ]]
    })
  }



  
  reset_password() {
    
    
    this.apimethod.get_request_Param(this.apiString.userAccess.reset_password, this.resetPassword.value).subscribe((result: any) => {
        console.log("success")
        
        this.apimethod.popupMessage('success', 'Password Changed Successfully')

        this.router.navigate(['/auth/login/'])
      
      }, error => {
    
        this.apimethod.popupMessage('error', 'Please enter the password correctly')
      })
    }
}
