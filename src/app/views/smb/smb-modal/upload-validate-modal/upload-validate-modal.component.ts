import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { basePriceAddtionData } from '../../smb-interface.service';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from "@angular/common";
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-upload-validate-modal',
  templateUrl: './upload-validate-modal.component.html',
  styleUrls: ['./upload-validate-modal.component.scss']
})
export class UploadValidateModalComponent implements OnInit {

  loading: boolean = false
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  uploadValidateModal: any;

  selectedFiles: any = { "uploadValidateModal": { file: '', uploadCompleted: false } };
  loadingRouteConfig: boolean = false
  fileEv: any;
  SelectedTab: any;
  uploadValidateModal_data: any;
  url: any;
  apiStringURL: any;

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private location: Location,
  ) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url.split('/'));
      this.url = event.url.split('/')
      console.log(this.url)
      if (this.url[2] === 'base-price') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.smb_mini_bar
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Division', 'Product_Level_02', 'document_item_currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.smb
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Division', 'Product_Level_02', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'incoterm-exceptions') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.incoterm_exceptions_mini_bar
          this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.incoterm_exceptions
          this.displayedColumns = ['Market_Country', 'Customer_Group', 'Incoterm1', 'Product_Division', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'extra-certificate') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.certificate_mini_bar
          this.displayedColumns = ['BusinessCode', 'Certificate', 'Grade_Category', 'Market_Country', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.certificate
          this.displayedColumns = ['BusinessCode', 'Certificate', 'Grade_Category', 'Market_Country', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'freight-parity') {
        console.log("coming in  freight-parity")
        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.freight_parity_mini_bar
          this.displayedColumns = ["Delivering_Mill", "Market_Country", "Market_Customer_Group", "Zip_Code_Dest", "Product_Division", "Document_Item_Currency", "Amount", "Currency"]
        } else {
          this.apiStringURL = this.apiString.freight_parity
          this.displayedColumns = ["Delivering_Mill", "Market_Country", "Zip_Code_Dest", "Product_Division", "Document_Item_Currency", "Amount", "Currency"]
        }

      } else if (this.url[2] === 'grade') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.grade_mini_bar
          this.displayedColumns = ['BusinessCode', 'Grade_Category', 'Customer_Group', 'Market_Country', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.grade
          this.displayedColumns = ['BusinessCode', 'Grade_Category', 'Country_Group', 'Market_Country', 'Product_Division', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'length-logistic') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.length_logistic_mini_bar
          this.displayedColumns = ['Customer_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.length_logistic
          this.displayedColumns = ['Country_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'length-production') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.length_production_mini_bar
          this.displayedColumns = ['BusinessCode', 'Customer_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.length_production
          this.displayedColumns = ['BusinessCode', 'Country_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'profile') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.profile_mini_bar
          this.displayedColumns = ['BusinessCode', 'Customer_Group', 'Market_Country', 'Product_Level_04', 'Product_Level_05', 'Product_Level_02', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.profile
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Division', 'Product_Level_04', 'Product_Level_05', 'Product_Level_02', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'profile-lberia-italy') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.profile_lberia_italy_mini_bar
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Market_Customer_Group', 'Delivering_Mill', 'Product_Level_02', 'Product_Level_05', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.profile_lberia_italy
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Product_Level_02', 'Product_Level_05', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else if (this.url[2] === 'transport-mode') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.transport_mode_mini_bar
          this.displayedColumns = ['Product_Division', 'Market_Country', 'Market_Customer_Group', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.transport_mode
          this.displayedColumns = ['Product_Division', 'Market_Country', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      } else {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.delivery_mill_mini_bar
          this.displayedColumns = ['Market_Country', 'Market_Customer_Group', 'Delivering_Mill', 'Product_Division', 'Document_Item_Currency', 'Amount', 'Currency']
        } else {
          this.apiStringURL = this.apiString.delivery_mill
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Product_Division', 'Beam_Category', 'Document_Item_Currency', 'Amount', 'Currency']
        }

      }
    });
  }

  ngOnInit() {
    this.data = { "inputaction": '' }

  }


  // ==================== file change event ========================
  dropFiles(ev: any): any {
    ev.preventDefault();
    this.fileEv = ev
    let data: any = ev.dataTransfer.items[0]
    console.log(data)
    if (data) {
      console.log("coming inside")
      // If dropped items aren't files, reject them
      const allowed_types = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

      if (!_.includes(allowed_types, data.type)) {
        let imageError: any = 'Only xlsx are allowed.';
        this._snackBar.open(imageError, "", {
          duration: 4000,
          panelClass: ['error'],
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
        return false;
      }
      let obj: any
      if (data.kind === 'file') {
        let file = data.getAsFile();
        obj = {
          fileName: file.name,
          selectedFile: file,
        }
      }
      this.selectedFiles.uploadValidateModal = {
        file: obj,
        uploadCompleted: true

      }
    }
  }

  dragOverHandler(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  onSelectFile(event: any) {
    this.fileEv = event
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        let file: any = event.target.files[i]
        console.log(file)

        let obj: any = {
          fileName: file.name,
          selectedFile: file
        }
        this.selectedFiles.uploadValidateModal = {
          file: obj,
          uploadCompleted: true
        }
        // this.selectedFiles.push(obj);
        reader.onload = (event: any) => {
        }

        reader.readAsDataURL(event.target.files[i]);
        event.target.value = ''

      }
    }
  }

  deleteFile() {

    this.uploadValidateModal = ''
    this.selectedFiles.uploadValidateModal = {
      file: "",
      uploadCompleted: false
    }
    console.log(this.fileEv, "FILE EV ")
    // this.fileEv.target.value = "";
  }
  uploadFiles() {
    console.log("coming", this.selectedFiles)
    const formData = new FormData();
    formData.append("filename", this.selectedFiles.uploadValidateModal.file.selectedFile)
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.upload, formData).subscribe((data) => {
      console.log(data)
      let resultData: any = data
      this.loadingRouteConfig = false
      this.uploadValidateModal_data = resultData
      this.uploadValidateModal = new MatTableDataSource<basePriceAddtionData>(resultData.data)
      setTimeout(() => {
        this.uploadValidateModal.paginator = this.paginator;
        this.uploadValidateModal.sort = this.sort;
      });
      this.apiMethod.popupMessage('success', 'File data read successfully')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while reading uploaded file')
    })
  }

  //==========================end===================================
  //filter 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.uploadValidateModal.filter = filterValue.trim().toLowerCase();
    if (this.uploadValidateModal.paginator) {
      this.uploadValidateModal.paginator.firstPage();
    }
  }

  //data validate
  validateDataForm() {
    console.log(this.uploadValidateModal)
    let data: any = {
      "billet": this.uploadValidateModal_data.data,
      "filename": this.uploadValidateModal_data.filename
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.validate, data).subscribe((result: any) => {
      console.log("success")
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'File validated successfully')
      this.location.back()
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while validating uploaded file')
    })
  }
  back() {
    this.location.back()
  }
}
