import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styleUrls: ['./group-user.component.scss']
})
export class GroupUserComponent implements OnInit {
  loadingRouteConfig: boolean = false
  isLinear = false;
  groupUserForm: any = FormGroup;
  breadCrumblocationsList: any = []
  menuItem: any;
  subMenuList: any;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateBreadCrumb()
    this.groupUserForm = this._formBuilder.group({
      group_code: ['GC001', Validators.required],
      group_description: ['', Validators.required],
      menu: ['', Validators.required],
      sub_menu: ['', Validators.required]
    });
    this.getRequiredDetails()
  }
  getRequiredDetails() {
    this.loadingRouteConfig = true
   
    this.apiMethod.get_request_header(this.apiString.userAccess.group_management_data).subscribe((result: any) => {
      console.log(result)
      this.loadingRouteConfig = false
      this.groupUserForm.patchValue({
        group_code: result?.group_id
      })
      this.menuItem = result?.menu_items
    }, error => {
      this.loadingRouteConfig = false
      console.log(error)
    })
  }
  submit() {
    console.log("test")
    this.loadingRouteConfig = true
    console.log(this.groupUserForm.value)
    this.apiMethod.post_request_header(this.apiString.userAccess.group_management_insert, this.groupUserForm.value).subscribe(result => {
      console.log(result)
      this.apiMethod.popupMessage("success","Successfully added User Group")
      this.loadingRouteConfig = false
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage("error","Unable to add the user Group")
      console.log(error)
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
