import { SelectionModel } from '@angular/cdk/collections';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';
export interface UserData {
  id: any;
  imageURL: any;
  name: string;
}
@Component({
  selector: 'app-upload-task-file',
  templateUrl: './upload-task-file.component.html',
  styleUrls: ['./upload-task-file.component.scss']
})
export class UploadTaskFileComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'action'];
  selection = new SelectionModel<UserData>(true, []);
  dataSource: any = []
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageEvent: any = PageEvent;
  selectedFiles: any = [];
  urls: any = [];
  imageError: any;
  loadingRouteConfig: boolean = false;
  userDetails: any;
  breadCrumblocationsList: any = []
  imageList: any = [];
  pageType: any;
  totalCount: any;
  pageLength: any = 25;
  pageOffset: any = 0;
  constructor(private _snackBar: MatSnackBar,
    private router: Router,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private popup: MatDialog,
    private route: ActivatedRoute
  ) {
    let userInfo: any = localStorage.getItem('grocoon-Auth')
    this.userDetails = JSON.parse(userInfo)
    this.route.paramMap.subscribe((param: any) => {
      this.pageType = param.get('type')
    })
  }
  ngOnInit() {
    this.selectedFiles = []
  }
  ngAfterViewInit() {
    this.imageList.paginator = this.paginator;
  }

  pageChangeCall(event: any) {
    console.log(event)
    this.pageOffset = event.pageIndex
    this.pageLength = event.pageSize
  }
  dropFiles(ev: any): any {
    ev.preventDefault();
    let data: any = ev.dataTransfer.items[0]
    console.log(data)
    if (data) {
      console.log("coming inside")
      // If dropped items aren't files, reject them
      const allowed_types = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

      if (!_.includes(allowed_types, data.type)) {
        this.imageError = 'Only xlsx are allowed.';
        this._snackBar.open(this.imageError, "", {
          duration: 4000,
          panelClass: ['error'],
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
        return false;
      }
      if (data.kind === 'file') {
        let file = data.getAsFile();
        let obj: any = {
          fileName: file.name,
          selectedFile: file,
          fileId: `${file.name}-${file.lastModified}`,
          uploadCompleted: false
        }
        this.selectedFiles.push(obj);
      }
    }
  }
  
  dragOverHandler(ev: any) {
    console.log(ev)
    ev.preventDefault();
    ev.stopPropagation();
  }

  onSelectFile(event: any) {
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        let file: any = event.target.files[i]
        console.log(file)

        let obj: any = {
          fileName: file.name,
          selectedFile: file,
          fileId: `${file.name}-${file.lastModified}`,
          uploadCompleted: false
        }
        this.selectedFiles.push(obj);
        reader.onload = (event: any) => {
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    } if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
      console.log(this.urls)
    }
  }

  deleteFile(file: any) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
  }
  uploadFiles() {
    const formData = new FormData();
    formData.append("upload_deleted", 'true')
    this.selectedFiles.forEach((file: any) => {
      formData.append("filename", file.selectedFile)
    })
    this.apiMethod.post_request(this.apiString.alloy_files_upload, formData).subscribe((data) => {
      console.log(data)
      this._snackBar.open('Files are uploaded successfully', "", {
        duration: 4000,
        panelClass: ['success'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    }, error => {
      this._snackBar.open("Somthing went wrong. ", "", {
        duration: 4000,
        panelClass: ['error'],
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    })
  }
}
