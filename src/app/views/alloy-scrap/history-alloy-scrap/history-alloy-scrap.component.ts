import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface historyData {
  "Batch_ID": number,
  "username": string,
  "condition_type": any,
  "date_time": string,
  "filename": any
}
@Component({
  selector: 'app-history-alloy-scrap',
  templateUrl: './history-alloy-scrap.component.html',
  styleUrls: ['./history-alloy-scrap.component.scss']
})
export class HistoryAlloyScrapComponent implements OnInit {
  loadingRouteConfig: boolean = false
  displayedColumns: string[] = ['Batch_ID', 'filename', 'username', 'condition_type', 'date_time', "action"];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 10;
  pageOffset: any = 0;
  totalCount: any=0;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getHistory()
  }
  //getting uploaded history of alloy scrap 
  getHistory() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request(this.apiString.alloy_scrap_history + "?offset=" + this.pageOffset + "&limit=" + this.pageLength).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount=resultData.data.length
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<historyData>(resultData.data)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
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
  applyFilter() {
    const filterValue = this.searchValue;
    if (this.dataSource && filterValue) {
      this.loadingRouteConfig = true
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.loadingRouteConfig = false
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  viewDetails(rowData: any) {
    console.log(rowData)
    let string = (rowData.filename + "&" + rowData.condition_type + "&" + rowData.Batch_ID)
    console.log(string)
    var encodedString = btoa(string);
    console.log(string, encodedString)
    this.router.navigate(['/alloy-scrap/history/fileDetails/' + encodedString])
  }

}
