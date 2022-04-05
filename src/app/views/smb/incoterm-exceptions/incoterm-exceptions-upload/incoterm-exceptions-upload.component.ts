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
  selector: 'app-incoterm-exceptions-upload',
  templateUrl: './incoterm-exceptions-upload.component.html',
  styleUrls: ['./incoterm-exceptions-upload.component.scss']
})
export class IncotermExceptionsUploadComponent implements OnInit {
  loading: boolean = false
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  incoterm_exceptions: any;

  selectedFiles: any = { "incoterm_exceptions": { file: '', uploadCompleted: false } };
  loadingRouteConfig: boolean = false
  fileEv: any;
  SelectedTab: any;
  incoterm_exceptions_data: any;
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
        this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']

      } else {
        this.apiStringURL = this.apiString.smb_mini_bar
        this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency']

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
      this.selectedFiles.incoterm_exceptions = {
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
        this.selectedFiles.incoterm_exceptions = {
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

    this.incoterm_exceptions = ''
    this.selectedFiles.incoterm_exceptions = {
      file: "",
      uploadCompleted: false
    }
    console.log(this.fileEv, "FILE EV ")
    // this.fileEv.target.value = "";
  }
  uploadFiles() {
    const formData = new FormData();
    formData.append("filename", this.selectedFiles.incoterm_exceptions.file.selectedFile)
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.incoterm_exceptions_upload, formData).subscribe((data) => {
      console.log(data)
      let resultData: any = data
      this.loadingRouteConfig = false
      this.incoterm_exceptions_data = resultData
      this.incoterm_exceptions = new MatTableDataSource<basePriceAddtionData>(resultData.data)
      setTimeout(() => {
        this.incoterm_exceptions.paginator = this.paginator;
        this.incoterm_exceptions.sort = this.sort;
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
    this.incoterm_exceptions.filter = filterValue.trim().toLowerCase();
    if (this.incoterm_exceptions.paginator) {
      this.incoterm_exceptions.paginator.firstPage();
    }
  }

  //data validate
  validateDataForm() {
    let data: any = {
      "Incoterm_Exceptions": this.incoterm_exceptions_data.data,
      "filename": this.incoterm_exceptions_data.filename
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiStringURL.incoterm_exceptions_validate, data).subscribe((result: any) => {
      console.log("success")
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'File Sent for Approval')
      this.back()
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while validating uploaded file')
    })
  }
  back() {
    this.location.back()
  }
}
