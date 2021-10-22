import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { profileLberiaItaly } from '../../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../../smb-popup-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { EditPopupComponent } from '../../smb-popup-modal/edit-popup/edit-popup.component';

@Component({
  selector: 'app-profile-lberia-italy-list',
  templateUrl: './profile-lberia-italy-list.component.html',
  styleUrls: ['./profile-lberia-italy-list.component.scss']
})
export class ProfileLberiaItalyListComponent implements OnInit {

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
        this.apiStringURL = this.apiString.profile_lberia_italy
        this.displayedColumns = [
          'BusinessCode',
          'Market_Country',
          'Delivering_Mill',
          'Product_Level_02',
          'Product_Level_05',
          'Document_Item_Currency',
          'Amount',
          'Currency',
          'action'
        ]
      } else {
        this.apiStringURL = this.apiString.profile_lberia_italy_mini_bar

        this.displayedColumns =
          [
            'BusinessCode',
            'Market_Country',
            'Delivering Mill',
            'Product_Level 02',
            'Product_Level 05',
            'Document_Item_Currency',
            'Market_Customer',
            'Market_Customer_Group',
            'Amount',
            'Currency',
            'action'
          ]
      }
    });
  }

  ngOnInit(): void {
    this.getProfileLberiaItaly()
  }
  //getting uploaded history of alloy scrap 
  getProfileLberiaItaly() {
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
      this.dataSource = new MatTableDataSource<profileLberiaItaly>(resultData.data)
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
    this.getProfileLberiaItaly()
  }
  //filter 
  applyFilter() {
    this.pageOffset = 0
    this.pageLength = 500
    this.getProfileLberiaItaly()
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
            fileName: "profile_lberia_italy",
            updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getProfileLberiaItaly()
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
        this.getProfileLberiaItaly()
      })
    }
  }
  uploadByXlFile() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/profile-lberia-italy/bulk-upload'])
    } else {
      this.router.navigate(['/smb/profile-lberia-italy/mini-bar/bulk-upload'])
    }
  }
  downloadInXlFile() {
    window.open(this.apiStringURL.download, "_blank")
  }
}
