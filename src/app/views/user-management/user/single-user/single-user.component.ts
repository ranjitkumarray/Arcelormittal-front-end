import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.updateBreadCrumb()

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      user_group: ['', Validators.required]
    });
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
  submit() {
    console.log(this.firstFormGroup.value, this.secondFormGroup.value)
  }
}
