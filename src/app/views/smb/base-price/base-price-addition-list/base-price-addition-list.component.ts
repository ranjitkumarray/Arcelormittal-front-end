
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { basePriceAddtionData } from '../../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WarnPopupComponent } from '../warn-popup/warn-popup.component';
import { EditBasePriceAdditionComponent } from '../edit-base-price-addition/edit-base-price-addition.component';
@Component({
  selector: 'app-base-price-addition-list',
  templateUrl: './base-price-addition-list.component.html',
  styleUrls: ['./base-price-addition-list.component.scss']
})
export class BasePriceAdditionListComponent implements OnInit {
  loadingRouteConfig: boolean = false
  lastdata: any = [
    {
      Amount: "0",
      BusinessCode: "*",
      Currency: "'EUR'",
      Document_Item_Currency: "*",
      Market_Country: "IE",
      Product_Division: "02",
      Product_Level_02: "FL",
      Username: "Administrator",
      date_time: "10/10/2021 15:41:25",
      id: 665,
    },
    {
      Amount: "0",
      BusinessCode: "*",
      Currency: "'EUR'",
      Document_Item_Currency: "*",
      Market_Country: "IE",
      Product_Division: "02",
      Product_Level_02: "FL",
      Username: "Administrator",
      date_time: "10/10/2021 15:41:25",
      id: 665,
    },
    {
      Amount: "0",
      BusinessCode: "*",
      Currency: "'EUR'",
      Document_Item_Currency: "*",
      Market_Country: "IE",
      Product_Division: "02",
      Product_Level_02: "FL",
      Username: "Administrator",
      date_time: "10/10/2021 15:41:25",
      id: 665,
    }
  ]
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
  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private popup: MatDialog
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
    this.dataSource = new MatTableDataSource<basePriceAddtionData>(this.lastdata)
    this.apiMethod.get_request(this.apiString.base_price_data + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<basePriceAddtionData>(resultData.data)
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
    this.getBasePriceAddition()
  }
  //filter 
  applyFilter() {
    const filterValue = this.searchValue;
    this.pageOffset = 0
    this.pageLength = 500
    this.getBasePriceAddition()
  }
  basePriceClick(rowData: any, viewOn: any) {
    if (viewOn === 'edit') {
      // this.router.navigate(['/smb/base-price/edit'])
      const dialogRef = this.popup.open(EditBasePriceAdditionComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            id: rowData.id,
            url: this.apiString.get_record_base_price + "?id=" + rowData.id,
            type: 'delete'
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        this.getBasePriceAddition()
      })
    }

    if (viewOn === 'delete') {
      const dialogRef = this.popup.open(WarnPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            id: rowData.id,
            url: this.apiString.get_record_base_price + "?id=" + rowData.id,
            type: 'delete'
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        this.getBasePriceAddition()
      })

    }
    console.log(rowData)
    let string = (rowData.filename + "&" + rowData.condition_type + "&" + rowData.Batch_ID)
    console.log(string)
    var encodedString = btoa(string);
    console.log(string, encodedString)
  }
}
