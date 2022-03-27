import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { range } from 'lodash';
import { filter, map } from 'rxjs/operators';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.scss']
})
export class AddPopupComponent implements OnInit {

  loadingRouteConfig: boolean = false
  url: any;
  apiStringURL: any;
  formFieldName: any = [];
  addRecordForm: any = FormGroup;
  k: any;

  constructor(
    public dialogRef: MatDialogRef<AddPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {

    if (this.data.fileName === 'price_addition') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.smb_mini_bar : this.apiString.smb
    } else if (this.data.fileName === 'incoterm_exceptions') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.incoterm_exceptions_mini_bar : this.apiString.incoterm_exceptions
    } else if (this.data.fileName === 'certificate') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.certificate_mini_bar : this.apiString.certificate
    } else if (this.data.fileName === 'freight_parity') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.freight_parity_mini_bar : this.apiString.freight_parity
    } else if (this.data.fileName === 'grade') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.grade_mini_bar : this.apiString.grade
    } else if (this.data.fileName === 'length_logistic') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.length_logistic_mini_bar : this.apiString.length_logistic
    } else if (this.data.fileName === 'length_production') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.length_production_mini_bar : this.apiString.length_production
    } else if (this.data.fileName === 'profile') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.profile_mini_bar : this.apiString.profile
    } else if (this.data.fileName === 'profile_lberia_italy') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.profile_lberia_italy_mini_bar : this.apiString.profile_lberia_italy
    } else if (this.data.fileName === 'transport_mode') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.transport_mode_mini_bar : this.apiString.transport_mode
    } else if (this.data.fileName === 'delivery_mill') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.delivery_mill_mini_bar : this.apiString.delivery_mill
    } else if (this.data.fileName === 'minton_leans') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.minton_mini_bar : this.apiString.minton
    }


  }
  ngOnInit(): void {
    this.addRecordForm = this.fb.group({});
    this.addingNewForm()
    // console.log("Data = ",this.data.table_name)
    this.k = Object.keys(this.addRecordForm.value)
  }

  closeModel() {
    this.dialogRef.close()
  }

  addingNewForm() {

    let formControlFields: any = [];
    this.data.fieldValue.forEach((element: any, index: any) => {
      formControlFields.push({ name: element, control: new FormControl('') });
    })
    formControlFields.forEach((f: any) => this.addRecordForm.addControl(f.name, f.control));
    // console.log(this.addRecordForm, "==========NEXT")
  }

  addRecord(): any {
    console.log(this.data.addURL)
    let formInputValue = Object.keys(this.addRecordForm.value).some(k => this.addRecordForm.value[k])
    this.k = Object.keys(this.addRecordForm.value)

    let l = this.k.length
    for (let i in range(l)) {
      console.log(this.addRecordForm.value[this.k[i]])
      if (this.addRecordForm.value[this.k[i]] == '') {
        formInputValue = false
        break
      }
    }

    if (formInputValue === false) {
      return false;
    } else {
      delete this.addRecordForm.value.action
      let table_name = { table_name: this.data.table_name }
      Object.assign(this.addRecordForm.value, table_name)
      console.group(this.addRecordForm.value)
      this.loadingRouteConfig = true
      this.apiMethod.post_request_header(this.data.addURL, this.addRecordForm.value).subscribe(result => {
        console.log(result)
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('success', ' Record Successfully Added & Sent For Apporoval.')
        this.closeModel()
      }, error => {
        console.log(error)
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('error', 'Error While Adding Record')
        this.closeModel()
      })
    }
  }
  removeUnderScore(value: any) {
    return value.split('_').join(" ");
  }
}
