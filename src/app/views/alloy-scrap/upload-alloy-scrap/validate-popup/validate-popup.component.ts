import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'protractor';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-validate-popup',
  templateUrl: './validate-popup.component.html',
  styleUrls: ['./validate-popup.component.scss']
})
export class ValidatePopupComponent implements OnInit {
  loadingRouteConfig: boolean = false
  url: any;
  apiStringURL: any;
 
  constructor(
    public dialogRef: MatDialogRef<ValidatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiMethod: ApiService,

  ) {

  }

  ngOnInit(): void {
   // console.log(this.data)
  }
  closeModel() {
   window.location.reload()   
    this.dialogRef.close() 
    this.apiMethod.popupMessage('error','Not Uploaded')
  }
  deleteRecord() {
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.data.deleteURL, { id: this.data.id }).subscribe((result) => {
      this.loadingRouteConfig = false
      this.dialogRef.close()
      this.apiMethod.popupMessage('success', 'Reord Sent for Approval')
    }, error => {
      this.dialogRef.close()
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while deleting the record')
    })

  }
  upload(){
    this.apiMethod.popupMessage('success','Record Uploaded Successfully')
  }
  
  
  SelectedTab:any
  alloy_surcharge_billet:any
  selectedFiles:any
  alloy_surcharge_wire:any
  scrap_surcharge_billet:any
  fileEv:any
  deleteFile(file: any, tabName: any) {

    if (this.SelectedTab === "alloy_surcharge_billet") {
      this.alloy_surcharge_billet = ''
      this.selectedFiles.alloy_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    } else if (this.SelectedTab === "alloy_surcharge_wire") {
      this.alloy_surcharge_wire = ''
      this.selectedFiles.alloy_surcharge_wire = {
        file: "",
        uploadCompleted: false
      }
    } else {
      this.scrap_surcharge_billet = ''
      this.selectedFiles.scrap_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    }
    console.log(this.fileEv, "FILE EV ")
    // this.fileEv.target.value = "";
  }
}

