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
  ForgotPassword: any = FormGroup;
  loadingRouteConfig: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
  constructor(private fb:FormBuilder,private apimethod:ApiService,private router: Router,  private apiString: CitGlobalConstantService,) { }

  ngOnInit(): void {
    this.ForgotPassword=this.fb.group({
      'email':['',[Validators.required,
      
        Validators.email,
        Validators.pattern(this.emailPattern)
      ]]
    })
  }
  


  reset_password() {
    this.loadingRouteConfig = true
  this.apimethod.get_request_Param(this.apiString.userAccess.resetemail, this.ForgotPassword.value).subscribe((result: any) => {
      console.log("success")
      this.loadingRouteConfig = false
     
      setTimeout(()=>{
           
          }, 2000);
           this.apimethod.popupMessage('success', 'Email sent for password reset')
      this.router.navigate(['/auth/login/'])
    }, error => {
      this.loadingRouteConfig = false
      this.apimethod.popupMessage('error', 'Invalid Email')
    })
  }


}