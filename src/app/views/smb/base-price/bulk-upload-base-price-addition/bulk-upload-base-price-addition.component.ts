import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { basePriceAddtionData } from '../../smb-interface.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from "@angular/common";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bulk-upload-base-price-addition',
  templateUrl: './bulk-upload-base-price-addition.component.html',
  styleUrls: ['./bulk-upload-base-price-addition.component.scss']
})
export class BulkUploadBasePriceAdditionComponent implements OnInit {

  loading: boolean = false
  uploadBasePriceAddition: string[] = [];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  alloyBasePriceAddition: any;

  selectedFiles: any = { "alloyBasePriceAddition": { file: '', uploadCompleted: false } };
  loadingRouteConfig: boolean = false
  fileEv: any;
  SelectedTab: any;
  alloyBasePriceAddition_data: any;
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
      if (this.url[3] != 'mini-bar') {
        this.apiStringURL = this.apiString.smb
        this.uploadBasePriceAddition = [
          'BusinessCode',
          'Market_Country',
          'Product_Division',
          'Product_Level_02',
          'document_item_currency',
          'Amount',
          'Currency'
        ]
      } else {
        this.apiStringURL = this.apiString.smb_mini_bar
        this.uploadBasePriceAddition = [
          'BusinessCode',
          'Market_Country',
          'Customer_Group',
          'Beam_Category',
          'document_item_currency',
          'Amount',
          'Currency'
        ]
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
      this.selectedFiles.alloyBasePriceAddition = {
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
        this.selectedFiles.alloyBasePriceAddition = {
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

    this.alloyBasePriceAddition = ''
    this.selectedFiles.alloyBasePriceAddition = {
      file: "",
      uploadCompleted: false
    }
    console.log(this.fileEv, "FILE EV ")
    // this.fileEv.target.value = "";
  }
  uploadFiles() {
    const formData = new FormData();
    formData.append("filename", this.selectedFiles.alloyBasePriceAddition.file.selectedFile)
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.upload, formData).subscribe((data) => {
      console.log(data)
      let resultData: any = data
      this.loadingRouteConfig = false
      this.alloyBasePriceAddition_data = resultData
      this.alloyBasePriceAddition = new MatTableDataSource<basePriceAddtionData>(resultData.data)
      setTimeout(() => {
        this.alloyBasePriceAddition.paginator = this.paginator;
        this.alloyBasePriceAddition.sort = this.sort;
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
    this.alloyBasePriceAddition.filter = filterValue.trim().toLowerCase();
    if (this.alloyBasePriceAddition.paginator) {
      this.alloyBasePriceAddition.paginator.firstPage();
    }
  }

  //data validate
  validateDataForm() {
    let data: any = {
      "billet": this.alloyBasePriceAddition_data.data,
      "filename": this.alloyBasePriceAddition_data.filename
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.validate, data).subscribe((result: any) => {
      console.log("success")
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'File validated successfully')
      this.router.navigate(['/smb/base-price/list'])
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while validating uploaded file')
    })
  }
  back() {
    this.location.back()
  }
}
