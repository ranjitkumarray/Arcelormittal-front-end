import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-base-price-addition',
  templateUrl: './edit-base-price-addition.component.html',
  styleUrls: ['./edit-base-price-addition.component.scss']
})
export class EditBasePriceAdditionComponent implements OnInit {
  loadingRouteConfig: boolean = false
  editBasePriceAddition: any = FormGroup
  url: any;
  apiStringURL: any;
  constructor(
    public dialogRef: MatDialogRef<EditBasePriceAdditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
   
      if (this.data.type != 'edit-min-bar') {
        this.apiStringURL = this.apiString.smb
      } else {
        this.apiStringURL = this.apiString.smb_mini_bar
      }
   
  }

  ngOnInit(): void {
    console.log(this.url,this.data)
    if (this.data.type != 'edit-min-bar') {
      this.editBasePriceAddition = this.fb.group({
        Amount: [''],
        BusinessCode: [''],
        Currency: [''],
        Document_Item_Currency: [''],
        Market_Country: [''],
        Product_Division: [''],
        Product_Level_02: [''],
        id_value: ['']
      })
    } else {
      this.editBasePriceAddition = this.fb.group({
        Amount: [''],
        BusinessCode: [''],
        Currency: [''],
        Document_Item_Currency: [''],
        Market_Country: [''],
        Customer_Group: [''],
        Market_Customer: [''],
        Beam_Category: [''],
        id_value: ['']
      })
    }
    this.patchValue()
  }
  patchValue() {
    console.log(this.data)
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiStringURL.get, { id: this.data.id }).subscribe((result) => {
      console.log(result)
      this.loadingRouteConfig = false
      let resultData: any = result
      this.editBasePriceAddition.patchValue({
        Amount: resultData.record[0].Amount,
        BusinessCode: resultData.record[0].BusinessCode,
        Currency: resultData.record[0].Currency,
        Document_Item_Currency: resultData.record[0].Document_Item_Currency,
        Market_Country: resultData.record[0].Market_Country,
        id_value: this.data.id
      })
      if (this.data.type != 'edit-min-bar') {
        this.editBasePriceAddition.patchValue({
          Product_Division: resultData.record[0].Product_Division,
          Product_Level_02: resultData.record[0].Product_Level_02,
        })
      } else {
        this.editBasePriceAddition.patchValue({
          Customer_Group: resultData.record[0].Customer_Group,
          Market_Customer: resultData.record[0].Market_Customer,
          Beam_Category: resultData.record[0].Beam_Category,

        })
      }
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
    console.group(this.editBasePriceAddition.value)
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiStringURL.update, this.editBasePriceAddition.value).subscribe(result => {
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
