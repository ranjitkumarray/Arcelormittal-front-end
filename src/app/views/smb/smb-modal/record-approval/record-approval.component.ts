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
        delete e.status;
        delete e.table_name;
        delete e.Username;
        // delete e.id;

      });
      this.displayedColumns = Object.keys(this.resultData.data[0])
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
    this.loadingRouteConfig = true
    this.apiMethod.post_request_header(this.apiString.aproveRecords, { tablename: this.queryParam['tablename'], data: this.resultValue }).subscribe(result => {
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
