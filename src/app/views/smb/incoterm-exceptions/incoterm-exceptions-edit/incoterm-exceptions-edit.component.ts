import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-incoterm-exceptions-edit',
  templateUrl: './incoterm-exceptions-edit.component.html',
  styleUrls: ['./incoterm-exceptions-edit.component.scss']
})
export class IncotermExceptionsEditComponent implements OnInit {

  loadingRouteConfig: boolean = false
  editIncotermExceptionsClick: any = FormGroup
  url: any;
  apiStringURL: any;
  constructor(
    public dialogRef: MatDialogRef<IncotermExceptionsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {

    if (this.data.type != 'edit-min-bar') {
      this.apiStringURL = this.apiString.incoterm_exceptions
    } else {
      this.apiStringURL = this.apiString.incoterm_exceptions_mini_bar
    }

  }

  ngOnInit(): void {
    console.log(this.url, this.data)
    if (this.data.type != 'edit-min-bar') {
      this.editIncotermExceptionsClick = this.fb.group({
        'Market_Country': [''],
        'Product_Division': [''],
        'Incoterm1': [''],
        'Customer_Group': [''],
        'Beam_Category': [''],
        'Delivering_Mill': [''],
        'Document_Item_Currency': [''],
        'Amount': [''],
        'Currency': [''],
        'id': ['']
      })
    } else {
      this.editIncotermExceptionsClick = this.fb.group({
        'Market_Country': [''],
        'Product_Division': [''],
        'Incoterm1': [''],
        'Customer_Group': [''],
        'Beam_Category': [''],
        'Delivering_Mill': [''],
        'Document_Item_Currency': [''],
        'Amount': [''],
        'Currency': [''],
        'id': ['']
      })
    }
    this.patchValue()
  }
  patchValue() {
    console.log(this.data)
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiStringURL.get, { id: this.data.content.id }).subscribe((result) => {
      console.log(result)
      this.loadingRouteConfig = false
      let resultData: any = result
      this.editIncotermExceptionsClick.patchValue({
        Market_Country: resultData.record[0].Market_Country,
        Product_Division: resultData.record[0].Product_Division,
        Incoterm1: resultData.record[0].Incoterm1,
        Customer_Group: resultData.record[0].Customer_Group,
        Beam_Category: resultData.record[0].Beam_Category,
        Delivering_Mill: resultData.record[0].Delivering_Mill,
        Document_Item_Currency: resultData.record[0].Document_Item_Currency,
        Amount: resultData.record[0].Amount,
        Currency: resultData.record[0].Currency,
        id_value: this.data.content.id
      })
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching bace price addition')
      this.closeModel()
    })

  }
  closeModel() {
    this.dialogRef.close()

  }
  editRecord() {
    console.group(this.editIncotermExceptionsClick.value)
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiStringURL.update+'?id='+this.data.content.id, this.editIncotermExceptionsClick.value).subscribe(result => {
      console.log(result)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', ' Record successfully updated')
      this.closeModel()
    }, error => {
      console.log(error)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while updating bace price addition')
      // this.closeModel()
    })
  }
}
