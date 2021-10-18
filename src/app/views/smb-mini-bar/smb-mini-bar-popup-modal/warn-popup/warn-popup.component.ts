import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-warn-popup',
  templateUrl: './warn-popup.component.html',
  styleUrls: ['./warn-popup.component.scss']
})
export class WarnPopupComponent implements OnInit {
  loadingRouteConfig: boolean = false
  constructor(
    public dialogRef: MatDialogRef<WarnPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
  closeModel() {
    this.dialogRef.close()
  }
  deleteRecord() {
    this.loadingRouteConfig = true
    this.apiMethod.delete_request_Param(this.apiString.delete_record, { id: this.data.id }).subscribe((result) => {
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
