
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { incotermExceptionsData } from '../../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../../smb-popup-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { IncotermExceptionsEditComponent } from '../incoterm-exceptions-edit/incoterm-exceptions-edit.component';

@Component({
  selector: 'app-incoterm-exceptions-list',
  templateUrl: './incoterm-exceptions-list.component.html',
  styleUrls: ['./incoterm-exceptions-list.component.scss']
})
export class IncotermExceptionsListComponent implements OnInit {


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
        this.apiStringURL = this.apiString.incoterm_exceptions
        this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency', "action"]
      } else {
        this.apiStringURL = this.apiString.incoterm_exceptions_mini_bar
        this.displayedColumns = ['Market_Country', 'Product_Division', 'Incoterm1', 'Customer_Group', 'Beam_Category', 'Delivering_Mill', 'Document_Item_Currency', 'Amount', 'Currency', "action"]
      }
    });
  }

  ngOnInit(): void {
    this.getIncotermExceptions()
  }
  //getting uploaded history of alloy scrap 
  getIncotermExceptions() {
    this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.apiMethod.get_request(this.apiStringURL.incoterm_exceptions_list + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<incotermExceptionsData>(resultData.data)
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
    this.getIncotermExceptions()
  }
  //filter 
  applyFilter() {
    const filterValue = this.searchValue;
    this.pageOffset = 0
    this.pageLength = 500
    this.getIncotermExceptions()
  }
  incotermExceptionsClick(rowData: any, viewOn: any) {
    if (viewOn === 'edit') {
      const dialogRef = this.popup.open(IncotermExceptionsEditComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            id: rowData.id,
            url: this.apiStringURL.get_incoterm_exceptions + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'edit-min-bar' : 'edit'
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getIncotermExceptions()
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
            url: this.apiStringURL.get_incoterm_exceptions + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete'

          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        this.getIncotermExceptions()
      })

    }
  }
  uploadIncotermExceptions() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/incoterm-exceptions/bulk-upload'])
    } else {
      this.router.navigate(['/smb/incoterm-exceptions/mini-bar/bulk-upload'])
    }
  }
  downloadIncotermExceptions() {
    window.open(this.apiStringURL.incoterm_exceptions_download, "_blank")
  }
}
