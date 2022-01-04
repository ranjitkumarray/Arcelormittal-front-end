import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-warn-popup',
  templateUrl: './warn-popup.component.html',
  styleUrls: ['./warn-popup.component.scss']
})
export class WarnPopupComponent implements OnInit {
  loadingRouteConfig: boolean = false
  url: any;
  apiStringURL: any;
  constructor(
    public dialogRef: MatDialogRef<WarnPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiMethod: ApiService,
    
  ) { 
    
  }

  ngOnInit(): void {
    console.log(this.data)
  }
  closeModel() {
    this.dialogRef.close()
  }
  deleteRecord() {
    this.loadingRouteConfig = true
    console.log(this.data,this.data.deleteURL)
    this.apiMethod.delete_request_header_Param(this.data.deleteURL, { id: this.data.id }).subscribe((result) => {
      this.loadingRouteConfig = false
      this.dialogRef.close()
      this.apiMethod.popupMessage('success', 'Record deleted successfully')
    }, error => {
      this.dialogRef.close()
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching history')
    })

  }
}
