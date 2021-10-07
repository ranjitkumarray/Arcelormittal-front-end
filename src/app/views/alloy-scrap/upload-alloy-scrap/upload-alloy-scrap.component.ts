import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { billetData, wireData, scrapData } from '../alloy-scrap-interface.service';

@Component({
  selector: 'app-upload-alloy-scrap',
  templateUrl: './upload-alloy-scrap.component.html',
  styleUrls: ['./upload-alloy-scrap.component.scss']
})
export class UploadAlloyScrapComponent implements OnInit {
  loading: boolean = false
  displayedColumns_wire: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
  displayedColumns_billet: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'Materialnr', 'dRUCKSPERRE'];
  displayedColumns_scrap: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Model', 'Amount']
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  alloy_surcharge_billet: any;
  alloy_surcharge_wire: any;
  scrap_surcharge_billet: any;
  selectedFiles: any = {
    "alloy_surcharge_billet": { file: '', uploadCompleted: false },
    "alloy_surcharge_wire": { file: '', uploadCompleted: false },
    "scrap_surcharge_billet": { file: '', uploadCompleted: false }
  };
  loadingRouteConfig: boolean = false
  fileEv: any;
  SelectedTab: any;
  alloy_surcharge_billet_data: any;
  scrap_surcharge_billet_data: any;
  alloy_surcharge_wire_data: any;

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.data = { "inputaction": '' }
    this.myTaksTabChange("Alloy Surcharge Wire")
  }


  //tab change event 
  myTaksTabChange(tabLable: any) {
    if (tabLable === 'Alloy Surcharge Wire') {
      this.SelectedTab = "alloy_surcharge_wire"
      console.log(this.SelectedTab)
    } else if (tabLable === 'Alloy Surcharge Billet') {
      console.log(tabLable)
      this.SelectedTab = "alloy_surcharge_billet"

    } else {
      console.log(tabLable)
      this.SelectedTab = "scrap_surcharge_billet"
    }
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
      if (this.SelectedTab === "alloy_surcharge_billet") {
        this.selectedFiles.alloy_surcharge_billet = {
          file: obj,
          uploadCompleted: true
        }
      } else if (this.SelectedTab === "alloy_surcharge_wire") {
        this.selectedFiles.alloy_surcharge_wire = {
          file: obj,
          uploadCompleted: true
        }
      } else {
        this.selectedFiles.scrap_surcharge_billet = {
          file: obj,
          uploadCompleted: true
        }
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
        if (this.SelectedTab === "alloy_surcharge_billet") {
          this.selectedFiles.alloy_surcharge_billet = {
            file: obj,
            uploadCompleted: true
          }
        } else if (this.SelectedTab === "alloy_surcharge_wire") {
          this.selectedFiles.alloy_surcharge_wire = {
            file: obj,
            uploadCompleted: true
          }
        } else {
          this.selectedFiles.scrap_surcharge_billet = {
            file: obj,
            uploadCompleted: true
          }
        }
        // this.selectedFiles.push(obj);
        reader.onload = (event: any) => {
        }

        reader.readAsDataURL(event.target.files[i]);
        event.target.value = ''

      }
    }
  }

  deleteFile(file: any, tabName: any) {

    if (this.SelectedTab === "alloy_surcharge_billet") {
      this.alloy_surcharge_billet = ''
      this.selectedFiles.alloy_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    } else if (this.SelectedTab === "alloy_surcharge_wire") {
      this.alloy_surcharge_wire = ''
      this.selectedFiles.alloy_surcharge_wire = {
        file: "",
        uploadCompleted: false
      }
    } else {
      this.scrap_surcharge_billet = ''
      this.selectedFiles.scrap_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    }
    console.log(this.fileEv, "FILE EV ")
    // this.fileEv.target.value = "";
  }
  uploadFiles(uploadDataTo: any) {
    console.log(uploadDataTo)
    const formData = new FormData();
    let urlString: any
    if (uploadDataTo === "alloy_surcharge_billet") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_billet.file.selectedFile)
      urlString = this.apiString.alloy_billet_upload
    } else if (uploadDataTo === "alloy_surcharge_wire") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_wire.file.selectedFile)
      urlString = this.apiString.alloy_wire_upload

    } else {
      formData.append("filename", this.selectedFiles.scrap_surcharge_billet.file.selectedFile)
      urlString = this.apiString.scrap_upload
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request(urlString, formData).subscribe((data) => {
      console.log(data)
      let resultData: any = data
      this.loadingRouteConfig = false
      if (uploadDataTo === "alloy_surcharge_billet") {
        this.alloy_surcharge_billet_data = resultData
        this.alloy_surcharge_billet = new MatTableDataSource<billetData>(JSON.parse(resultData.data))
        setTimeout(() => {
          this.alloy_surcharge_billet.paginator = this.paginator;
          this.alloy_surcharge_billet.sort = this.sort;
        });
      } else if (uploadDataTo === "alloy_surcharge_wire") {
        this.alloy_surcharge_wire_data = resultData
        this.alloy_surcharge_wire = new MatTableDataSource<wireData>(JSON.parse(resultData.data))
        setTimeout(() => {
          this.alloy_surcharge_wire.paginator = this.paginator;
          this.alloy_surcharge_wire.sort = this.sort;
        });
      } else {
        this.scrap_surcharge_billet_data = resultData
        this.scrap_surcharge_billet = new MatTableDataSource<scrapData>(JSON.parse(resultData.data))
        setTimeout(() => {
          this.scrap_surcharge_billet.paginator = this.paginator;
          this.scrap_surcharge_billet.sort = this.sort;
        });
      }
      this.apiMethod.popupMessage('success', 'File data read successfully')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while reading uploaded file')
    })
  }

  //==========================end===================================
  //filter 
  applyFilter(event: Event, searchFrom: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue, this.alloy_surcharge_wire,)
    if (searchFrom === "alloy_surcharge_billet") {
      this.alloy_surcharge_billet.filter = filterValue.trim().toLowerCase();
      if (this.alloy_surcharge_billet.paginator) {
        this.alloy_surcharge_billet.paginator.firstPage();
      }
    } else if (searchFrom === "alloy_surcharge_wire") {
      this.alloy_surcharge_wire.filter = filterValue.trim().toLowerCase();

      if (this.alloy_surcharge_wire.paginator) {
        this.alloy_surcharge_wire.paginator.firstPage();
      }
    } else {
      this.scrap_surcharge_billet.filter = filterValue.trim().toLowerCase();

      if (this.scrap_surcharge_billet.paginator) {
        this.scrap_surcharge_billet.paginator.firstPage();
      }
    }
  }

  //data validate
  validateDataForm(uploadDataTo: any) {
    let urlString: any
    let data: any
    if (uploadDataTo === "alloy_surcharge_billet") {
      urlString = this.apiString.alloy_billet_validate
      data = {
        "billet": JSON.parse(this.alloy_surcharge_billet_data.data),
        "filename": this.alloy_surcharge_billet_data.filename
      }
    } else if (uploadDataTo === "alloy_surcharge_wire") {
      urlString = this.apiString.alloy_wire_validate
      data = {
        "wire": JSON.parse(this.alloy_surcharge_wire_data.data),
        "filename": this.alloy_surcharge_wire_data.filename
      }
    } else {
      urlString = this.apiString.scrap_validate
      data = {
        "scrap": JSON.parse(this.scrap_surcharge_billet_data.data),
        "filename": this.scrap_surcharge_billet_data.filename
      }
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request(urlString, data).subscribe((result: any) => {
      console.log("success")
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'File validated successfully')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while validating uploaded file')
    })
  }
}
