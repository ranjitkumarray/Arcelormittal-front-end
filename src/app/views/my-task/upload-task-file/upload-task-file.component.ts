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
    this.updateBreadCrumb()
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
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        const allowed_types = [
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

        if (!_.includes(allowed_types, ev.dataTransfer.items[i].type)) {
          this.imageError = 'Only Images are allowed.';
          this._snackBar.open(this.imageError, "", {
            duration: 4000,
            panelClass: ['error'],
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
          return false;
        }
        if (ev.dataTransfer.items[i].kind === 'file') {
          let file = ev.dataTransfer.items[i].getAsFile();
          let obj: any = {
            fileName: file.name,
            selectedFile: file,
            fileId: `${file.name}-${file.lastModified}`,
            uploadCompleted: false
          }
          this.selectedFiles.push(obj);
          console.log('... file[' + i + '].name = ' + file.name);
          console.log("... file= ' + ", file);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      };
    };
  }
  // filesDropped(files: FileHandle[]): void {
  //   let files1: any = files;
  //   console.log(files1, "file data ", files1[0], files1[0].file)
  //   files1.forEach((element: any) => {
  //     let file: any = element
  //     let obj: any = {
  //       fileName: file.name,
  //       selectedFile: file,
  //       fileId: `${file.name}-${file.lastModified}`,
  //       uploadCompleted: false
  //     }
  //     this.selectedFiles.push(obj);
  //   });

  //   console.log(this.files1)
  // }
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

  updateBreadCrumb() {

    this.breadCrumblocationsList = [{
      'locationName': 'Dashboard',
      'link': '/distributor/dashboard',
      'currentPage': false
    }, {
      'locationName': 'Images',
      'link': '',
      'currentPage': true
    }];

    window.scrollTo(0, 0);
    console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }
  deleteFile(file: any) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
  }
  uploadFiles() {

  }
}
