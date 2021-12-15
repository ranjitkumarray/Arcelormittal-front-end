import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPassword: any = FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
  constructor(private fb:FormBuilder,private apimethod:ApiService) { }

  ngOnInit(): void {
    this.ForgotPassword=this.fb.group({
      'email':['',[Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern)
      ]]
    })
  }

}
