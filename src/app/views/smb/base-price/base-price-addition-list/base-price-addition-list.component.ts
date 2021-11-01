
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { basePriceAddtionData } from '../../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditBasePriceAdditionComponent } from '../edit-base-price-addition/edit-base-price-addition.component';
import { WarnPopupComponent } from '../../smb-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { AddPopupComponent } from '../../smb-modal/add-popup/add-popup.component';
@Component({
  selector: 'app-base-price-addition-list',
  templateUrl: './base-price-addition-list.component.html',
  styleUrls: ['./base-price-addition-list.component.scss']
})
export class BasePriceAdditionListComponent implements OnInit {
  loadingRouteConfig: boolean = false
  displayedColumns: string[] = [];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  url: any;
  apiStringURL: any;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private popup: MatDialog,
    private route: ActivatedRoute
  ) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url.split('/'));
      this.url = event.url.split('/')
      console.log(this.url)
      if (this.url[3] != 'mini-bar') {
        this.apiStringURL = this.apiString.smb
        this.displayedColumns = ['BusinessCode', 'Market_Country','Product_Division', 'Product_Level_02', 'Document_Item_Currency', 'Amount', 'Currency', "action"]
      } else {
        this.apiStringURL = this.apiString.smb_mini_bar
        this.displayedColumns = ['BusinessCode', 'Market_Country','Customer_Group', 'Market_Customer', 'Beam_Category', 'Document_Item_Currency', 'Amount', 'Currency', "action"]
      }
    });
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
    this.apiMethod.get_request(this.apiStringURL.list + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
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
    if (viewOn === 'add') {
      const dialogRef = this.popup.open(AddPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            content: '',
            addURL: this.apiStringURL.add,
            type: this.url[3] === 'mini-bar' ? 'miniBar' : 'add',
            fileName: "price_addition",
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getBasePriceAddition()
      })
    }
    if (viewOn === 'edit') {
      const dialogRef = this.popup.open(EditBasePriceAdditionComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            id: rowData.id,
            url: this.apiStringURL.get + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'edit-min-bar' : 'edit'
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
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
            url: this.apiStringURL.get + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete',
            deleteURL: this.apiStringURL.delete
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        this.getBasePriceAddition()
      })

    }
  }
  uploadSmbBasePrice() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/base-price/bulk-upload'])
    } else {
      this.router.navigate(['/smb/base-price/mini-bar/bulk-upload'])
    }
  }
  downloadBasePriceAddition() {
    window.open(this.apiStringURL.download, "_blank")
  }
}
