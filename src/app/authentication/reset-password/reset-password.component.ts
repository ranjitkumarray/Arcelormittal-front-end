import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPassword:any=FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPassword = this.fb.group({
      'NewPassword': ['', [
        Validators.required,
      ]],
      'ConfirmPassword': ['', [
        Validators.required,

      ]]
    })
  }

}
