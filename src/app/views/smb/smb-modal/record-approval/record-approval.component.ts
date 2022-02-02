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
  resultValue: any;
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
      let resultData: any = result
      resultData.data.forEach((e: any) => {
        delete e.flag;
        delete e.status;
        delete e.table_name;
        delete e.Username;
        delete e.id;

      });
      this.displayedColumns = Object.keys(resultData.data[0])
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<any>(resultData.data)
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
    let body = {

    }
    // this.apiMethod.post_request_header(this.apiString.aproveRecords, body).subscribe(result => {
    //   this.loadingRouteConfig = false
    //   this.apiMethod.popupMessage('success', 'Record approved successfully')
    //   this.getApprovalRecord()
    // }, error => {
    //   console.log(error)
    //   this.loadingRouteConfig = false
    //   this.apiMethod.popupMessage('error', 'Error while fatching history')

    // })
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
