import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from "@angular/common";
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.scss']
})
export class HistoryModalComponent implements OnInit {
  
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

  //mine
  searchValue:any;
  pageOffset:any = 0;
  pageLength : any = 10;
  totalCount :any = 0;
  dataSource : any;
  pageEvent :any = PageEvent;
  filterValue: any='';


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
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Customer_Group',  'Beam_Category','Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.smb
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Division', 'Product_Level_02', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'incoterm-exceptions') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.incoterm_exceptions_mini_bar
          this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.incoterm_exceptions
          this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'extra-certificate') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.certificate_mini_bar
          this.displayedColumns = ['BusinessCode', 'Certificate',  'Market_Country', 'Grade_Category', 'Customer_Group', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.certificate
          this.displayedColumns = ['BusinessCode', 'Certificate', 'Grade_Category', 'Market_Country', 'Document_Item_Currency', 'Delivering_Mill', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'freight-parity') {
        console.log("coming in  freight-parity")
        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.freight_parity_mini_bar
          this.displayedColumns = ["Delivering_Mill", "Market_Country", "Zip_Code_Dest", "Product_Division", "Document_Item_Currency", "Amount", "Currency", "Market_Customer_Group",'updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.freight_parity
          this.displayedColumns = ["Delivering_Mill", "Market_Country", "Zip_Code_Dest", "Product_Division", "Document_Item_Currency", "Amount", "Currency",'updated_on','Username']
        }

      } else if (this.url[2] === 'grade') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.grade_mini_bar
          this.displayedColumns = ['BusinessCode', 'Grade_Category', 'Market_Country', 'Document_Item_Currency',  'Customer_Group', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.grade
          this.displayedColumns = ['BusinessCode', 'Grade_Category', 'Market_Country', 'Document_Item_Currency', 'Product_Division', 'Country_Group', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'length-logistic') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.length_logistic_mini_bar
          this.displayedColumns = ['Country_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Transport_Mode',  'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.length_logistic
          this.displayedColumns = ['Country_Group', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'length-production') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.length_production_mini_bar
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To',  'Customer_Group', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.length_production
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Length', 'Length_From', 'Length_To', 'Document_Item_Currency', 'Country_Group', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'profile') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.profile_mini_bar
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Level_04', 'Product_Level_05', 'Product_Level_02', 'Delivering_Mill', 'Customer_Group',  'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.profile
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Product_Division', 'Product_Level_04', 'Product_Level_05', 'Product_Level_02', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'profile-lberia-italy') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.profile_lberia_italy_mini_bar
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Product_Level_02', 'Product_Level_05', 'Document_Item_Currency',  'Market_Customer_Group', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.profile_lberia_italy
          this.displayedColumns = ['BusinessCode', 'Market_Country', 'Delivering_Mill', 'Product_Level_02', 'Product_Level_05', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else if (this.url[2] === 'transport-mode') {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.transport_mode_mini_bar
          this.displayedColumns = ['Product_Division', 'Market_Country', 'Transport_Mode', 'Document_Item_Currency', 'Market_Customer_Group',  'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.transport_mode
          this.displayedColumns = ['Product_Division', 'Market_Country', 'Transport_Mode', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      } else {

        if (this.url[3] === 'mini-bar') {
          this.apiStringURL = this.apiString.delivery_mill_mini_bar
          this.displayedColumns = ['Market_Customer_Group',  'Market_Country', 'Delivering_Mill', 'Product_Division', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        } else {
          this.apiStringURL = this.apiString.delivery_mill
          this.displayedColumns = ['BusinessCode', 'Beam_Category', 'Market_Country', 'Delivering_Mill', 'Product_Division', 'Document_Item_Currency', 'Amount', 'Currency','updated_on','Username']
        }

      }
    });
  }

  //mine
  ngOnInit(): void {
console.log(this.url[2])
this.url[2] = this.url[2] == "base-price" ? "smb" : this.url[2];
console.log(this.url[2])
      this.getHistory()
  }
  //getting uploaded history of smb
  getHistory() {
    console.log({apistring:this.apiStringURL})
    this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.apiMethod.get_request(this.apiStringURL.history + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = resultData.data
      setTimeout(() => {
        if (this.filterValue) {
          this.dataSource.paginator = this.paginator;
        }
        this.dataSource.sort = this.sort;

      })
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching history')
    })
  }

  //page change 
  pageChangeCall(event: any) {
    console.log(event)
    this.pageOffset = event.pageIndex
    this.pageLength = event.pageSize
    this.getHistory()
  }
  //filter 
  applyFilter(filterValue: any) {
    console.log(filterValue.trim().toLowerCase())
    this.filterValue = filterValue
    this.pageOffset = 0
    this.pageLength = 500
    this.getHistory()
  }
  




  // ==================== file change event ========================
  // dropFiles(ev: any): any {
  //   ev.preventDefault();
  //   this.fileEv = ev
  //   let data: any = ev.dataTransfer.items[0]
  //   console.log(data)
  //   if (data) {
  //     console.log("coming inside")
      // If dropped items aren't files, reject them
    //   const allowed_types = [
    //     'application/vnd.ms-excel',
    //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

    //   if (!_.includes(allowed_types, data.type)) {
    //     let imageError: any = 'Only xlsx are allowed.';
    //     this._snackBar.open(imageError, "", {
    //       duration: 4000,
    //       panelClass: ['error'],
    //       horizontalPosition: 'end',
    //       verticalPosition: 'bottom',
    //     });
    //     return false;
    //   }
    //   let obj: any
    //   if (data.kind === 'file') {
    //     let file = data.getAsFile();
    //     obj = {
    //       fileName: file.name,
    //       selectedFile: file,
    //     }
    //   }
    //   this.selectedFiles.uploadValidateModal = {
    //     file: obj,
    //     uploadCompleted: true

    //   }
    // }
  // }

  

  

  
  

  //==========================end===================================
  
  //data validate
  // validateDataForm() {
  //   console.log(this.uploadValidateModal)
  //   let data: any = {
  //     "billet": this.uploadValidateModal_data.data,
  //     "filename": this.uploadValidateModal_data.filename
  //   }
  //   this.loadingRouteConfig = true
  //   this.apiMethod.post_request(this.apiStringURL.validate, data).subscribe((result: any) => {
  //     console.log("success")
  //     this.loadingRouteConfig = false
  //     this.apiMethod.popupMessage('success', 'File validated successfully')
  //     this.location.back()
  //   }, error => {
  //     this.loadingRouteConfig = false
  //     this.apiMethod.popupMessage('error', 'Error while validating uploaded file')
  //   })
  // }
  // back() {
  //   this.location.back()
  // }
}
