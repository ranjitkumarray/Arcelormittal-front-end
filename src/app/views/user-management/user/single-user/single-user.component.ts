import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  breadCrumblocationsList: any = []
  loadingRouteConfig: boolean = false
  accessList: any;
  stepper: any;

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.updateBreadCrumb()
    let EMAIL_REGEXP = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEXP)]],
      phone_no: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      user_group: ['', Validators.required]
    });
    this.firstFormGroup.controls['username'].setErrors({ 'incorrect': false });
    this.getUserAccess()
  }
  getUserAccess() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request(this.apiString.userAccess.user_access).subscribe((result: any) => {
      this.loadingRouteConfig = false
      console.log(result)
      this.accessList = result.data
    }, error => {
      this.loadingRouteConfig = false
      console.log(error)
    })
  }
  validationCheck(type: any) {
    // if (type === 'username') {
    console.log("Coming")
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiString.userAccess.user_availability_check, { username: this.firstFormGroup.value.username }).subscribe((result: any) => {
      console.log(result)
      this.loadingRouteConfig = false
      if (type === 'username') {
        if (result.status === 'Exist Username') {
          this.firstFormGroup.controls['username'].setErrors({ 'incorrect': true });
          this._snackBar.open("Username Already Existing", "", {
            duration: 4000,
            panelClass: ['error'],
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
        } else {
          this.firstFormGroup.controls['username'].setErrors(null);
        }
      }
      if (type === 'email') {
        if (result.status === 'Exist Email') {
          this.firstFormGroup.controls['email'].setErrors({ 'incorrect': true });
          this._snackBar.open("Email Already Existing", "", {
            duration: 4000,
            panelClass: ['error'],
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
        } else {
          this.firstFormGroup.controls['email'].setErrors(null);
        }
      }
    }, error => {
      this.loadingRouteConfig = false
      console.log(error)
    })
    console.log("Coming", this.firstFormGroup)

    // }
  }
  submit() {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value)
    let body = {
      "username": this.firstFormGroup.value.username,
      "first_name": this.firstFormGroup.value.first_name,
      "middle_name": this.firstFormGroup.value.middle_name,
      "last_name": this.firstFormGroup.value.last_name,
      "email": this.firstFormGroup.value.email,
      "user_group": this.secondFormGroup.value.user_group,
      "phone_no": this.firstFormGroup.value.phone_no,
      "address": this.firstFormGroup.value.address
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiString.userAccess.add_single_user_management, body).subscribe(result => {
      this.loadingRouteConfig = false
      this._snackBar.open("Successfully added User Group", "", {
        duration: 4000,
        panelClass: ['success'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
      document.getElementById("reset")?.click()
      // this.stepper.reset()
    }, error => {
      this.loadingRouteConfig = false
      this._snackBar.open("Unable to add the user Group", "", {
        duration: 4000,
        panelClass: ['error'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    })
  }
  updateBreadCrumb() {
    this.breadCrumblocationsList = [
      {
        'locationName': 'Managment',
        'link': '/user/group-management',
        'currentPage': false
      },
      {
        'locationName': 'User Group',
        'link': '/user/group-management',
        'currentPage': true
      }
    ];

    window.scrollTo(0, 0);
    console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }

}
