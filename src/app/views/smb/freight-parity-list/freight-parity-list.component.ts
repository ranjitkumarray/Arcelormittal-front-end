import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { freightParityData } from '../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../smb-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { rowData } from 'src/app/sample';
import { EditPopupComponent } from '../smb-modal/edit-popup/edit-popup.component';
import { AddPopupComponent } from '../smb-modal/add-popup/add-popup.component';

@Component({
  selector: 'app-freight-parity-list',
  templateUrl: './freight-parity-list.component.html',
  styleUrls: ['./freight-parity-list.component.scss']
})
export class FreightParityListComponent implements OnInit {
  data: any = rowData
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
    private popup: MatDialog,
  ) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url.split('/'));
      this.url = event.url.split('/')
      console.log(this.url)
      if (this.url[3] != 'mini-bar') {
        this.apiStringURL = this.apiString.freight_parity
        this.displayedColumns = [
          "Delivering_Mill",
          "Market_Country",
          "Zip_Code_Dest",
          "Product_Division",
          "Document_Item_Currency",
          "Amount",
          "Currency",
          "action"
        ]
      } else {
        this.apiStringURL = this.apiString.freight_parity_mini_bar
        this.displayedColumns = [
          "Delivering_Mill",
          "Market_Country",
          "Zip_Code_Dest",
          "Product_Division",
          "Document_Item_Currency",
          "Amount",
          "Currency",
          "Market_Customer",
          "Market_Customer_Group",
          "action"
        ]
      }
    });
  }

  ngOnInit(): void {
    this.getFreightParity()
  }
  //getting uploaded history of alloy scrap 
  getFreightParity() {
    this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.dataSource = new MatTableDataSource<freightParityData>(this.data)
    this.apiMethod.get_request(this.apiStringURL.list + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<freightParityData>(resultData.data)
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
    this.getFreightParity()
  }
  //filter 
  applyFilter() {
    this.pageOffset = 0
    this.pageLength = 500
    this.getFreightParity()
  }
  actionClicked(rowData: any, viewOn: any) {
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
            fileName: "freight_parity",
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getFreightParity()
      })
    }
    if (viewOn === 'edit') {
      const dialogRef = this.popup.open(EditPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            content: rowData,
            url: this.apiStringURL.get + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'miniBar' : 'edit',
            fileName: "freight_parity",
            updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getFreightParity()
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
        this.getFreightParity()
      })
    }
  }
  uploadFreightParity() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/freight-parity/bulk-upload'])
    } else {
      this.router.navigate(['/smb/freight-parity/mini-bar/bulk-upload'])
    }
  }
  downloadFreightParity() {
    window.open(this.apiStringURL.download, "_blank")
  }
}
