import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { lengthLogisticData } from '../../smb-interface.service';

@Component({
  selector: 'app-record-approval',
  templateUrl: './record-approval.component.html',
  styleUrls: ['./record-approval.component.scss']
})
export class RecordApprovalComponent implements OnInit {
  queryParam: any;
  breadCrumblocationsList: any = []
  loadingRouteConfig: boolean = false
  param1: any;
  displayedColumns: string[] = [];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  filterValue: any = '';
  resultValue: any = [];
  resultData: any = [];
  lis:any = []
  common:any =["Document Item Currency","Amount","Currency","updated_on","status","flag","table_name","id","tableid"]
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private popup: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateBreadCrumb()
    this.route.queryParams.subscribe((param: any) => {
      console.log("Record", param)
      this.queryParam = param
    })
    console.log(this.queryParam)
    this.getApprovalRecord()
    this.param1 = this.route.snapshot.params.id_value;
    console.log(this.param1)

  }

  getApprovalRecord() {
    this.loadingRouteConfig = true
    this.resultValue = []
    this.apiMethod.get_request_header_Param(this.apiString.getAprovalRecord, this.queryParam).subscribe((result: any) => {
      console.log(result)
      this.resultValue = result.data
      this.resultData = result
      this.loadingRouteConfig = false

      if (this.resultData.data.length === 0 || this.resultData.data.length === undefined) {
        return
      }
      this.resultData.data.forEach((e: any) => {
        // delete e.flag;
        // delete e.status;
        // delete e.table_name;
        // delete e.Username;
        // delete e.id;
      });
      

    if(this.resultData.data[0].table_name=="SMB - Base Price - Category Addition"){
      this.lis=["sequence_id","BusinessCode","Market Country","Product Division","Product Level 02"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Base Price - Incoterm Exceptions"){
      this.lis=["sequence_id","Market Country","Customer Group","Incoterm1","Product Division","Beam Category","Delivering Mill"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Certificate"){
        this.lis=["sequence_id","BusinessCode","Certificate","Grade Category","Market Country","Delivering Mill"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Delivery Mill"){
        this.lis=["sequence_id","BusinessCode","Market Country","Delivering Mill","Product Division","Beam Category"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Grade"){
        this.lis=["sequence_id","BusinessCode","Market Country","Product Division"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="length logestic"){
        this.lis=["sequence_id","Country Group","Market Country","Delivering Mill","Length","Length From","Length To","Transport Mode"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Length Production"){
        this.lis=["sequence_id","BusinessCode","Country Group","Market Country","Delivering Mill","Length","Length From","Length To"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Profile"){
        this.lis=["sequence_id","BusinessCode","Market Country","Product Division","Product Level 04","Product Level 05","Product Level 02","Delivering Mill"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Profile Iberia and Italy"){
        this.lis=["sequence_id","BusinessCode","Market Country","Delivering Mill","Product Level 02","Product Level 05"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Transport Mode"){
        this.lis=["sequence_id","Product Division","Market Country","Transport Mode"].concat(this.common)
    } 
    //  SMB-Mini-Bar---------------------
    if(this.resultData.data[0].table_name=="SMB - Base Price - Category Addition - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Customer Group","Market Country","Beam Category"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Certificate - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Customer Group","Market Country","Certificate","Grade Category"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Delivery Mill - MiniBar"){
        this.lis=["sequence_id","Market Country","Market - Customer Group","Delivering Mill","Product Division"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Freight Parity - MiniBar"){
        this.lis=["sequence_id","Delivering Mill","Market Country","Market - Customer Group","Zip Code","Product Division"].concat(this.common)
     }
    if(this.resultData.data[0].table_name=="SMB - Extra - Grade - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Grade Category","Customer Group","Market Country"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Length Logistic - MiniBar"){
        this.lis=["sequence_id","Customer Group","Market Country","Delivering Mill","Length","Length From","Length To","Transport Mode"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Length Production - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Customer Group","Market Country","Delivering Mill","Length","Length From","Length To"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Profile - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Customer Group","Market Country","Product Level 04","Product Level 05","Product Level 02","Delivering Mill"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Profile Iberia and Italy - MiniBar"){
        this.lis=["sequence_id","BusinessCode","Market Country","Market - Customer Group","Delivering Mill","Product Level 02","Product Level 05"].concat(this.common)
    }
    if(this.resultData.data[0].table_name=="SMB - Extra - Transport Mode - MiniBar"){
        this.lis=["sequence_id","Product Division","Market Country","Market - Customer Group","Transport Mode"].concat(this.common)
    }
    
      this.displayedColumns = this.lis
      this.totalCount = this.resultData.totalCount
      this.dataSource = new MatTableDataSource<any>(this.resultData.data)
      setTimeout(() => {
        if (this.filterValue) {
          this.dataSource.paginator = this.paginator;
        }
        this.dataSource.sort = this.sort;

      })
    }, error => {
      console.log(error)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching history')
    })
  }
  //page change 
  pageChangeCall(event: any) {
    console.log(event)
    this.pageOffset = event.pageIndex
    this.pageLength = event.pageSize
    this.getApprovalRecord()
  }
  //filter 
  applyFilter(filterValue: any) {
    console.log(filterValue.trim().toLowerCase())
    this.filterValue = filterValue
    this.pageOffset = 0
    this.pageLength = 500
    this.getApprovalRecord()
  }
  approved() {
    let userDetails: any = localStorage.getItem('arc-userDetails')
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiString.aproveRecords, { tablename: this.queryParam['tablename'], data: this.resultValue, email: JSON.parse(userDetails).user.email }).subscribe(result => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'Record approved successfully')
      this.getApprovalRecord()
    }, error => {
      console.log(error)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching history')

    })
  }
  reject() {
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiString.rejectRecords, this.queryParam).subscribe(result => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', 'Record Rejected  successfully')
      this.getApprovalRecord()
    }, error => {
      console.log(error)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching history')

    })
  }
  updateBreadCrumb() {
    this.breadCrumblocationsList = [
      {
        'locationName': 'Approval List',
        'link': '',
        'currentPage': true
      }
    ];

    window.scrollTo(0, 0);
    console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }
  removeUnderScore(value: any) {
    return value.split('_').join(" ");
  }
}
