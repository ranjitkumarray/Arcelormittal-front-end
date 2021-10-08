
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { basePriceAddtionData } from '../../smb-interface.service';
@Component({
  selector: 'app-base-price-addition-list',
  templateUrl: './base-price-addition-list.component.html',
  styleUrls: ['./base-price-addition-list.component.scss']
})
export class BasePriceAdditionListComponent implements OnInit {
  loadingRouteConfig: boolean = false
  dummyData: any = [{
    "Amount": "5",
    "BusinessCode": "*",
    "Currency": "'EUR'",
    "Document_Item_Currency": "*",
    "Market_Country": "AT",
    "Product_Division": "01",
    "Product_Level_02": "2"
  }]
  displayedColumns: string[] = [
    'BusinessCode',
    'Market_Country',
    'Product_Division',
    'Product_Level_02',
    'Amount',
    'Currency',
    "action"
  ];
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
    this.getBasePriceAddition()
  }
  //getting uploaded history of alloy scrap 
  getBasePriceAddition() {
    this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.dataSource = new MatTableDataSource<basePriceAddtionData>(this.dummyData)
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.apiMethod.get_request(this.apiString.alloy_scrap_history + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      // this.dataSource = new MatTableDataSource<basePriceAddtionData>(resultData.data)

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
    this.getBasePriceAddition()
  }
  //filter 
  applyFilter() {
    const filterValue = this.searchValue;
    this.pageOffset = 0
    this.pageLength = 10
    this.getBasePriceAddition()
  }
  basePriceClick(rowData: any, viewOn: any) {
    if (viewOn === 'edit') {
      this.router.navigate(['/smb/base-price/edit'])
    }
    if (viewOn === 'view') {
      this.router.navigate(['/smb/base-price/view'])
    }
    if (viewOn === 'delete') {
      // this.router.navigate(['/smb/base-price/add'])

    }
    console.log(rowData)
    let string = (rowData.filename + "&" + rowData.condition_type + "&" + rowData.Batch_ID)
    console.log(string)
    var encodedString = btoa(string);
    console.log(string, encodedString)
  }

}
