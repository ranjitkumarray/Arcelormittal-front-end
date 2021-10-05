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
  data = [
    {
      "Batch_ID": 1,
      "username": "Administrator",
      "date_time": "05-10-2021 05: 54: 41",
      "filename": "2021090800_ZLEZ_0200.xlsx"
    },
    {
      "Batch_ID": 2,
      "username": "Administrator",
      "date_time": "05-10-2021 05: 54: 29",
      "filename": "2021090800_Z133_0300.xlsx"
    },
    {
      "Batch_ID": 3,
      "username": "Administrator",
      "date_time": "05-10-2021 05: 52: 31",
      "filename": "2021090800_ZSCZ_0200.xlsx"
    },
    {
      "Batch_ID": 4,
      "username": "Administrator",
      "date_time": "05-10-2021 05: 40: 48",
      "filename": "2021090800_Z133_0300.xlsx"
    }
  ]
  displayedColumns: string[] = ['Batch_ID', 'filename', 'username', 'date_time'];
  dataSource: any;

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
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })
  }
  //filter 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

  }
}
