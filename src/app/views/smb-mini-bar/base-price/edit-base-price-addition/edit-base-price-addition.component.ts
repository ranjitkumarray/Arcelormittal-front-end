import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(
    public dialogRef: MatDialogRef<EditBasePriceAdditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
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
    this.patchValue()
  }
  patchValue() {
    console.log(this.data)
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiString.get_record_base_price, { id: this.data.id }).subscribe((result) => {
      console.log(result)
      this.loadingRouteConfig = false
      let resultData: any = result
      this.editBasePriceAddition.patchValue({
        Amount: resultData.record[0].Amount,
        BusinessCode: resultData.record[0].BusinessCode,
        Currency: resultData.record[0].Currency,
        Document_Item_Currency: resultData.record[0].Document_Item_Currency,
        Market_Country: resultData.record[0].Market_Country,
        Product_Division: resultData.record[0].Product_Division,
        Product_Level_02: resultData.record[0].Product_Level_02,
        id_value: this.data.id
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
    console.group(this.editBasePriceAddition.value)
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiString.update_record_base_price, this.editBasePriceAddition.value).subscribe(result => {
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
