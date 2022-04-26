import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabBody } from '@angular/material/tabs';
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
  displayedColumns:any = [];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  col:any;
  filterValue: any = '';
  resultValue: any = [];
  resultData: any = []
  old_dataSource:any;
  flag: any;
  color:any = "not-changed"

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
      this.loadingRouteConfig = false
      this.col=result.lis
      this.resultData = result
      this.resultValue = result.data
      this.flag = this.resultData.data[0].flag
      
      if (this.resultData.data.length === 0 || this.resultData.data.length === undefined) {
        return
      }
      this.resultData.data.forEach((e: any) => {
        // delete e.flag;
      });   

      // Removing Flag column
      this.col.forEach((element:any,index:any)=>{
        if(element=='flag') this.col.splice(index);
      });
      this.displayedColumns = this.col
      console.log("columns : ",this.displayedColumns)
      this.totalCount = this.resultData.totalCount
      this.dataSource = new MatTableDataSource<any>(this.resultData.data)
      this.old_dataSource = new MatTableDataSource<any>(this.resultData.old_json)
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
    this.loadingRouteConfig = true
    let userDetails: any = localStorage.getItem('arc-userDetails')
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
  //Changed colums color ncode
  colorcode(ind:any,col:any){
    for(let i=0;i<this.resultValue.length;i++){
      var status=this.resultValue[i].changed.includes(col)
      if(status==true){
        if(ind==i){
          this.color = "changed"
          return this.color
        }
      }    
    }
    this.color="not-changed"
    return this.color
 }
}
