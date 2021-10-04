import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';

@Component({
  selector: 'app-offer-status',
  templateUrl: './offer-status.component.html',
  styleUrls: ['./offer-status.component.scss']
})
export class OfferStatusComponent implements OnInit {
  loading: boolean = false
  displayedColumns_wire: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
  displayedColumns_billet: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'Materialnr', 'dRUCKSPERRE'];
  displayedColumns_scrap: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Model', 'Amount']
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  alloy_surcharge_billet: any;
  alloy_surcharge_wire: any;
  scrap_surcharge_billet: any;
  selectedFiles: any = {
    "alloy_surcharge_billet": {
      file: '',
      uploadCompleted: false
    },
    "alloy_surcharge_wire": {
      file: '',
      uploadCompleted: false

    },
    "scrap_surcharge_billet": {
      file: '',
      uploadCompleted: false
    }
  };
  loadingRouteConfig: boolean = false
  fileEv: any;
  SelectedTab: any;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.data = { "inputaction": '' }
    this.myTaksTabChange("Alloy Surcharge Wire")
  }

  //tab change event 
  myTaksTabChange(tabLable: any) {
    if (tabLable === 'Alloy Surcharge Wire') {
      console.log(tabLable)
      this.SelectedTab = "alloy_surcharge_wire"
      console.log(this.fileEv)
    }
    if (tabLable === 'Alloy Surcharge Billet') {
      console.log(tabLable)
      this.SelectedTab = "alloy_surcharge_billet"
      console.log(this.fileEv)

    }
    if (tabLable === 'Scrap Surcharge Billet') {
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
        if (this.SelectedTab === "alloy_surcharge_wire") {
          this.selectedFiles.alloy_surcharge_wire = {
            file: obj,
            uploadCompleted: true
          }
        }
        if (this.SelectedTab === "scrap_surcharge_billet") {
          this.selectedFiles.scrap_surcharge_billet = {
            file: obj,
            uploadCompleted: true
          }
        }
      }
    }

  }

  dragOverHandler(ev: any) {
    console.log(ev)
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
        }
        if (this.SelectedTab === "alloy_surcharge_wire") {
          this.selectedFiles.alloy_surcharge_wire = {
            file: obj,
            uploadCompleted: true
          }
        }
        if (this.SelectedTab === "scrap_surcharge_billet") {
          this.selectedFiles.scrap_surcharge_billet = {
            file: obj,
            uploadCompleted: true
          }
        }
        // this.selectedFiles.push(obj);
        reader.onload = (event: any) => {
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  deleteFile(file: any, tabName: any) {

    if (this.SelectedTab === "alloy_surcharge_billet") {
      this.selectedFiles.alloy_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    }
    if (this.SelectedTab === "alloy_surcharge_wire") {
      this.selectedFiles.alloy_surcharge_wire = {
        file: "",
        uploadCompleted: false
      }
    }
    if (this.SelectedTab === "scrap_surcharge_billet") {
      this.selectedFiles.scrap_surcharge_billet = {
        file: "",
        uploadCompleted: false
      }
    }
    this.fileEv.target.value = "";
  }
  uploadFiles(uploadDataTo: any) {
    const formData = new FormData();
    if (uploadDataTo === "alloy_surcharge_billet") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_billet.file.selectedFile)
    }
    if (uploadDataTo === "alloy_surcharge_wire") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_wire.file.selectedFile)
    }
    if (uploadDataTo === "scrap_surcharge_billet") {
      formData.append("filename", this.selectedFiles.scrap_surcharge_billet.file.selectedFile)
    }
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiString.alloy_files_upload, formData).subscribe((data) => {
      console.log(data)
      this.loadingRouteConfig = false
      this.dataToBeUploaded()
      this.apiMethod.popupMessage('success')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')


    })
  }

  //==========================end===================================


  // get uploaded file
  dataToBeUploaded() {
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.apiString.alloy_scrap, this.data).subscribe((data) => {
      this.loadingRouteConfig = false
      this.table_data = data
      this.alloy_surcharge_wire = this.table_data.wire
      this.alloy_surcharge_billet = this.table_data.billet
      this.scrap_surcharge_billet = this.table_data.scrap
      this.alloy_surcharge_wire = JSON.parse(this.alloy_surcharge_wire)
      this.alloy_surcharge_billet = JSON.parse(this.alloy_surcharge_billet)
      this.scrap_surcharge_billet = JSON.parse(this.scrap_surcharge_billet)
      this.apiMethod.popupMessage('success')

    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })
  }
  validateDataForm(type: any) {
    if (type === 'alloy_surcharge_wire') {
      this.loadingRouteConfig = true
      this.apiMethod.post_request(this.apiString.alloy_scrap, this.data).subscribe((result: any) => {
        console.log("success")
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('success')
      }, error => {
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('error')
      })
    }
    if (type === 'alloy_surcharge_wire') {
      this.data = { "inputaction": 'validated_billet' }
      this.apiMethod.post_request(this.apiString.alloy_scrap, this.data).subscribe((data) => {
        console.log("success")
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('success')
      }, error => {
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('error')
      })
    }
    if (type === 'scrap_surcharge_billet') {
      this.data = { "inputaction": 'validated_scrap' }
      this.apiMethod.post_request(this.apiString.alloy_scrap, this.data).subscribe((data) => {
        console.log("success")
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('success')
      }, error => {
        this.apiMethod.popupMessage('success')
      })
    }
  }
  ontabchange(event: any) {
    alert('hooo')
  }
}
