import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { historyData } from '../../alloy-scrap/alloy-scrap-interface.service';


@Component({
  selector: 'app-history-smb',
  templateUrl: './history-smb.component.html',
  styleUrls: ['./history-smb.component.scss']
})
export class HistorySmbComponent implements OnInit {

  loadingRouteConfig: boolean = false
  displayedColumns: string[] = ['Batch_ID', 'filename', 'username', 'condition_type', 'date_time', "action"];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 10;
  pageOffset: any = 0;
  totalCount: any = 0;
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
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.apiMethod.get_request(this.apiString.alloy_scrap_history + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<historyData>(resultData.data)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
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
  applyFilter() {
    const filterValue = this.searchValue;
    this.pageOffset = 0
    this.pageLength = 10
    this.getHistory()
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
