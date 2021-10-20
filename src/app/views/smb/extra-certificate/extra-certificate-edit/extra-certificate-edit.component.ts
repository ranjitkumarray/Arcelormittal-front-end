import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-extra-certificate-edit',
  templateUrl: './extra-certificate-edit.component.html',
  styleUrls: ['./extra-certificate-edit.component.scss']
})
export class ExtraCertificateEditComponent implements OnInit {

  loadingRouteConfig: boolean = false
  editBasePriceAddition: any = FormGroup
  url: any;
  apiStringURL: any;
  constructor(
    public dialogRef: MatDialogRef<ExtraCertificateEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {

    if (this.data.type != 'edit-min-bar') {
      this.apiStringURL = this.apiString.certificate
    } else {
      this.apiStringURL = this.apiString.certificate_mini_bar
    }

  }

  ngOnInit(): void {
    console.log(this.url, this.data)
    if (this.data.type != 'edit-min-bar') {
      this.editBasePriceAddition = this.fb.group({
        'BusinessCode': [''],
        'Certificate': [''],
        'Grade_Category': [''],
        'Market_Country': [''],
        'Document_Item_Currency': [''],
        'Delivering_Mill': [''],
        'Amount': [''],
        'Currency': [''],
        'id_value': ['']
      })
    } else {
      this.editBasePriceAddition = this.fb.group({
        'BusinessCode': [''],
        'Certificate': [''],
        'Grade_Category': [''],
        'Market_Country': [''],
        'Document_Item_Currency': [''],
        'Customer_Group': [''],
        'Market_Customer': [''],
        'Amount': [''],
        'Currency': [''],
        'id_value': ['']
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
        BusinessCode: resultData.record[0].BusinessCode,
        Certificate: resultData.record[0].Certificate,
        Grade_Category: resultData.record[0].Grade_Category,
        Document_Item_Currency: resultData.record[0].Document_Item_Currency,
        Market_Country: resultData.record[0].Market_Country,
        Amount: resultData.record[0].Amount,
        Currency: resultData.record[0].Currency,
        id_value: this.data.id
      })
      if (this.data.type != 'edit-min-bar') {
        this.editBasePriceAddition.patchValue({
          Delivering_Mill: resultData.record[0].Delivering_Mill,
        })
      } else {
        this.editBasePriceAddition.patchValue({
          Customer_Group: resultData.record[0].Customer_Group,
          Market_Customer: resultData.record[0].Market_Customer,
        })
      }
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching Extra Certificate')
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
      this.apiMethod.popupMessage('error', 'Error while updating Extra Certificate')
      // this.closeModel()
    })
  }
}
