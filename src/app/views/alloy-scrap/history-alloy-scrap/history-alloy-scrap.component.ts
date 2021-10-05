import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';

export interface historyData {
  "Batch_ID": number,
  "username": string,
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
  displayedColumns: string[] = ['Batch_ID', 'filename', 'username', 'date_time'];
  dataSource: any;
  searchValue: any
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.getHistory()
  }
  //getting uploaded history of alloy scrap 
  getHistory() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request(this.apiString.alloy_scrap_history).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<historyData>(resultData)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })
  }
  //filter 
  applyFilter() {
    const filterValue = this.searchValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
