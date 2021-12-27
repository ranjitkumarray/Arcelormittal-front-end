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
    // console.log(this.firstFormGroup.value, this.secondFormGroup.value)

    let f_group = this.firstFormGroup.value;
    let s_group = this.secondFormGroup.value;
    let body = [
      {
      first_name : f_group.first_name,
      middle_name : f_group.middle_name,
      last_name : f_group.last_name,
      username : f_group.username,
      email  : f_group.email,
      phone_no : f_group.phone_no,
      address : f_group.address
    },
    {
      user_group : s_group.user_group
      }
  ]
    
    // this.apiMethod.post_request('http://127.0.0.1:5000/management',body).subscribe(result=>{
      
     this.apiMethod.get_request_Param(this.apiString.userAccess.management,body).subscribe(result=>{
      this.loadingRouteConfig = false;
      this.apiMethod.popupMessage('success','Thanks For Updating')
    },
    error=>{
      console.log('failed')
      this.apiMethod.popupMessage('error','Try Again')
    }
    )
    console.log(typeof(body))
  }

 
}
