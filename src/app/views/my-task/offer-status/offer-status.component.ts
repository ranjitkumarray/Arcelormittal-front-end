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
  alloy_surcharge_billet_data: any;
  scrap_surcharge_billet_data: any;
  alloy_surcharge_wire_data: any;
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
    console.log(this.fileEv, "FILE EV ")
    this.fileEv.target.value = "";
  }
  uploadFiles(uploadDataTo: any) {
    console.log(uploadDataTo)
    const formData = new FormData();
    let urlString: any
    if (uploadDataTo === "alloy_surcharge_billet") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_billet.file.selectedFile)
      urlString = this.apiString.alloy_billet_upload
    }
    if (uploadDataTo === "alloy_surcharge_wire") {
      formData.append("filename", this.selectedFiles.alloy_surcharge_wire.file.selectedFile)
      urlString = this.apiString.alloy_wire_upload

    }
    if (uploadDataTo === "scrap_surcharge_billet") {
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
        this.alloy_surcharge_billet = JSON.parse(resultData.data)

      }
      if (uploadDataTo === "alloy_surcharge_wire") {
        this.alloy_surcharge_wire_data = resultData
        this.alloy_surcharge_wire = JSON.parse(resultData.data)

      }
      if (uploadDataTo === "scrap_surcharge_billet") {
        this.scrap_surcharge_billet_data = resultData
        this.scrap_surcharge_billet = JSON.parse(resultData.data)
      }
      this.apiMethod.popupMessage('success')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')


    })
  }

  //==========================end===================================

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
    }
    if (uploadDataTo === "alloy_surcharge_wire") {
      urlString = this.apiString.alloy_wire_validate
      data = {
        "wire": JSON.parse(this.alloy_surcharge_wire_data.data),
        "filename": this.alloy_surcharge_wire_data.filename
      }
    }
    if (uploadDataTo === "scrap_surcharge_billet") {
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
      this.apiMethod.popupMessage('success')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })

  }
  ontabchange(event: any) {
    alert('hooo')
  }
}
