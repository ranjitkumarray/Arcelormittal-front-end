import { Component, OnInit } from '@angular/core';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from  '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit {
  loadingRouteConfig: boolean = false;
  groupAccess:any;
  filterForm:any;
  selected :any;
  condition=true
  value = 'Clear me';


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  
  del(){
    delete(this.selected)
    
  }
  resultdata = [
    {groupAccess:'aaa'},
    {groupAccess:'bbb'},
    {groupAccess:'ccc'}

  ];
  
  constructor(
    private apiString:CitGlobalConstantService,
    private apiMethod:ApiService,
    private  dialogRef : MatDialog,
    private _snackBar: MatSnackBar
  ) {}
  openSnackBar() {
    this._snackBar.open(this.selected, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
    check(){
      this.condition=true;
    }

  ngOnInit(): void {
    
  }
  // getOfferStatus() {
  //   this.loadingRouteConfig = true
  //   let body = this.filterForm.value
  //   Object.keys(body).forEach(key => {
  //     if (body[key] === "") {
  //       body[key] = 'all';
  //     }
  //   });
  //   console.log(body)
    // this.resultdata = this.offer
    
    // this.dataSource=""
  //   setTimeout(() => {
  //     this.apiMethod.get_request(this.apiString.apiname).subscribe((result: any) => {
  //       this.loadingRouteConfig = false
  //       this.resultdata = result
       
      

  //     }, error => {
  //       this.loadingRouteConfig = false
  //       this.apiMethod.popupMessage('error', 'Error while getting offer status')
  //     })
  //   }, 1000);

  //}
  
}

