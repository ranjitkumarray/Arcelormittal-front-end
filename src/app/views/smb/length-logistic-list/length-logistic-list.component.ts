import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { lengthLogisticData } from '../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../smb-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { EditPopupComponent } from '../smb-modal/edit-popup/edit-popup.component';

@Component({
  selector: 'app-length-logistic-list',
  templateUrl: './length-logistic-list.component.html',
  styleUrls: ['./length-logistic-list.component.scss']
})
export class LengthLogisticListComponent implements OnInit {

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
        this.apiStringURL = this.apiString.length_logistic
        this.displayedColumns = [
          'Country_Group',
          'Market_Country',
          'Delivering_Mill',
          'Length', 
          'Length_From', 
          'Length_To',
          'Transport_Mode',
          'Document_Item_Currency',
          'Amount',
          'Currency',
          'action'
        ]
      } else {
        this.apiStringURL = this.apiString.length_logistic_mini_bar

        this.displayedColumns = [
          'Country_Group',
          'Market_Country',
          'Delivering_Mill',
          'Length', 
          'Length_From', 
          'Length_To',
          'Transport_Mode',
          'Document_Item_Currency',
          'Market_Customer',
          'Amount',
          'Currency',
          'action'
        ]
      }
    });
  }

  ngOnInit(): void {
    this.getLengthLogistic()
  }
  //getting uploaded history of alloy scrap 
  getLengthLogistic() {
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
      this.dataSource = new MatTableDataSource<lengthLogisticData>(resultData.data)
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
    this.getLengthLogistic()
  }
  //filter 
  applyFilter() {
    this.pageOffset = 0
    this.pageLength = 500
    this.getLengthLogistic()
  }
  actionClicked(rowData: any, viewOn: any) {
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
            fileName: "length_logistic",
            updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getLengthLogistic()
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
        this.getLengthLogistic()
      })
    }
  }
  uploadByXlFile() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/length-logistic/bulk-upload'])
    } else {
      this.router.navigate(['/smb/length-logistic/mini-bar/bulk-upload'])
    }
  }
  downloadInXlFile() {
    window.open(this.apiStringURL.download, "_blank")
  }
}
