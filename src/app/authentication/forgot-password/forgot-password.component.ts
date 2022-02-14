import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup } from '@angular/forms';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  loadingRouteConfig: boolean = false;
  checking: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$";
  ForgotPassword: any = FormGroup;
  resultData: any;
  constructor(private _formbuilder: FormBuilder,
    private apiMethod: ApiService,
    private apiString: CitGlobalConstantService,
    private router: Router,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ForgotPassword = this._formbuilder.group({
      'email': ['', Validators.pattern(this.emailPattern)]
    })
    
    this.activeRoute.queryParams
    .subscribe(params=>
      console.log(params))

  }

  forgotPassword() {
    let param = { email: this.ForgotPassword.value.email }
    console.log(param)
    if (this.ForgotPassword.status === "VALID") {
      this.loadingRouteConfig = true;
      this.checking = true;
      this.apiMethod.get_request_header_Param(this.apiString.userAccess.forgot_password, param).subscribe(result => {
        this.resultData = result
        this.loadingRouteConfig = false
        if (this.resultData.status == "Email sent successfully") {
          this.apiMethod.popupMessage('success', this.resultData.status)
          this.router.navigate(['/auth/reset-password'])
        }
        else {
          this.apiMethod.popupMessage('error', this.resultData.status)
        }
      })
    }
    else {
      this.checking = false;
      this.apiMethod.popupMessage('error', 'Please Enter valid Email')
    }
  }
}

