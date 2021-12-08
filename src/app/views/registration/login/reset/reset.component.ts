import { Component, OnInit } from '@angular/core';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FormBuilder, Validators } from "@angular/forms";

import { FormsModule, ReactiveFormsModule,FormGroup } from "@angular/forms";
// make sure to add it in imports array of @NgModule:


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
    registerForm : FormGroup = this.formBuilder.group({
    fullName: [, { validators: [Validators.required], updateOn: "change" }],
    email: [,{validators: [Validators.required, Validators.email],
    updateOn: "change",}],
    password: [, { validators: [Validators.required], updateOn: "change" }],
    phone: [, { updateOn: "change" }],
    role: ['jobSeeker', { validators: [Validators.required], updateOn: 'change' }],
    });

  // setPhoneValidation() {
  //   const phoneControl = this.registerForm.get("phone");
  //   phoneControl.setValidators([Validators.pattern("^[0-9]*$"),
  //   Validators.required,]);
  // this.registerForm.get("role").valueChanges.subscribe((role) => {
  //   if (role == "jobSeeker") {
  //     phoneControl.setValidators([Validators.pattern("^[0-9]*$"),
  //     Validators.required,]);
  // } else if (role == "employee") {
  //       phoneControl.setValidators([Validators.pattern("^[0-9]*$")]);
  //     }
  //   phoneControl.updateValueAndValidity();
  // });
  // }

}
