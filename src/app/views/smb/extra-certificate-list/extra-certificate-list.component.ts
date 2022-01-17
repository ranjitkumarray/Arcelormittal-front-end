import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { certificateData } from '../smb-interface.service';
import { MatDialog } from '@angular/material/dialog';
import { WarnPopupComponent } from '../smb-modal/warn-popup/warn-popup.component';
import { filter } from 'rxjs/operators';
import { EditPopupComponent } from '../smb-modal/edit-popup/edit-popup.component';
import { AddPopupComponent } from '../smb-modal/add-popup/add-popup.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-extra-certificate-list',
  templateUrl: './extra-certificate-list.component.html',
  styleUrls: ['./extra-certificate-list.component.scss']
})
export class ExtraCertificateListComponent implements OnInit {
  data: any = [
    {
      'BusinessCode': 'test-1',
      'Certificate': 'test-2',
      'Grade_Category': 'test',
      'Market_Country': 'test-3',
      'Document_Item_Currency': 'test-4',
      'Delivering_Mill': 'test-5',
      'Amount': 'test-6',
      'Currency': 'test-7',
      "id": 3
    }
  ]
  loadingRouteConfig: boolean = false
  displayedColumns: string[] = [];
  dataSource: any;
  searchValue: any
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  selection = new SelectionModel<certificateData>(true, []);

  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  url: any;
  apiStringURL: any;
  filterValue: any='';
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
        this.displayedColumns = ['select','sequence_id','BusinessCode', 'Certificate', 'Grade_Category', 'Market_Country', 'Document_Item_Currency', 'Delivering_Mill', 'Amount', 'Currency', 'action']
      } else {
        this.apiStringURL = this.apiString.certificate_mini_bar

        this.displayedColumns = ['sequence_id','BusinessCode', 'Certificate', 'Market_Customer', 'Market_Country', 'Grade_Category', 'Customer_Group', 'Document_Item_Currency', 'Amount', 'Currency', 'action']
      }
    });
  }

  ngOnInit(): void {
    this.getCertificate()
    // this.dataSource = new MatTableDataSource<certificateData>(this.data)

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

    // this.dataSource = new MatTableDataSource<certificateData>(this.data)
    this.apiMethod.get_request_header(this.apiStringURL.list + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<certificateData>(resultData.data)
      setTimeout(() => {
        if (this.filterValue) {
          this.dataSource.paginator = this.paginator;
        }
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
  applyFilter(filterValue: any) {
    console.log(filterValue.trim().toLowerCase())
    this.filterValue = filterValue
    this.pageOffset = 0
    this.pageLength = 500
    this.getCertificate()
  }
  actionClicked(rowData: any, viewOn: any) {
    if (viewOn === 'add') {
      const dialogRef = this.popup.open(AddPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          maxWidth: '40vw',
          data: {
            content: '',
            addURL: this.apiStringURL.add,
            type: this.url[3] === 'mini-bar' ? 'miniBar' : 'add',
            fileName: "certificate",
            fieldValue: this.displayedColumns
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getCertificate()
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
            fileName: "certificate",
            updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns
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
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete',
            deleteURL: this.apiStringURL.delete
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
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: certificateData): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sequence_id + 1}`;
    }
}
