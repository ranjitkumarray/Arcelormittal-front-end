import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { certificateData } from '../../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../../smb-popup-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { ExtraCertificateEditComponent } from '../extra-certificate-edit/extra-certificate-edit.component';

@Component({
  selector: 'app-extra-certificate-list',
  templateUrl: './extra-certificate-list.component.html',
  styleUrls: ['./extra-certificate-list.component.scss']
})
export class ExtraCertificateListComponent implements OnInit {

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
        this.apiStringURL = this.apiString.certificate
        this.displayedColumns = ['BusinessCode', 'Certificate', 'Grade_Category', 'Market_Country', 'Document_Item_Currency', 'Delivering_Mill', 'Amount', 'Currency', 'action']
      } else {
        this.apiStringURL = this.apiString.certificate_mini_bar

        this.displayedColumns = ['BusinessCode', 'Certificate', 'Market_Customer', 'Market_Country', 'Grade_Category', 'Customer_Group', 'Document_Item_Currency', 'Amount', 'Currency', 'action']
      }
    });
  }

  ngOnInit(): void {
    this.getCertificate()
  }
  //getting uploaded history of alloy scrap 
  getCertificate() {
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
      this.dataSource = new MatTableDataSource<certificateData>(resultData.data)
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
    this.getCertificate()
  }
  //filter 
  applyFilter() {
    this.pageOffset = 0
    this.pageLength = 500
    this.getCertificate()
  }
  actionClicked(rowData: any, viewOn: any) {
    if (viewOn === 'edit') {
      const dialogRef = this.popup.open(ExtraCertificateEditComponent,
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
        this.getCertificate()
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
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete'

          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        this.getCertificate()
      })
    }
  }
  uploadByXlFile() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/extra-certificate/bulk-upload'])
    } else {
      this.router.navigate(['/smb/extra-certificate/mini-bar/bulk-upload'])
    }
  }
  downloadInXlFile() {
    window.open(this.apiStringURL.download, "_blank")
  }
}
