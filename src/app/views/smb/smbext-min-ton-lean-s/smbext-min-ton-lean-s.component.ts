import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { gradeData, mintonModeData } from '../smb-interface.service';
import { EditPopupComponent } from '../smb-modal/edit-popup/edit-popup.component';
import { WarnPopupComponent } from '../smb-modal/warn-popup/warn-popup.component';
import { AddPopupComponent } from '../smb-modal/add-popup/add-popup.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-smbext-min-ton-lean-s',
  templateUrl: './smbext-min-ton-lean-s.component.html',
  styleUrls: ['./smbext-min-ton-lean-s.component.scss']
})
export class SMBExtMinTonLeanSComponent implements OnInit {

  loadingRouteConfig: boolean = false
  searchValue: any
  displayedColumns: string[] = [];
  tablename: any;
  dataSource: any;
  pageEvent: any = PageEvent;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageLength: any = 500;
  pageOffset: any = 0;
  totalCount: any = 0;
  url: any;
  apiStringURL: any;
  filterValue: any = '';
  testing:any = "test"
  selection = new SelectionModel<mintonModeData>(true, []);
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private popup: MatDialog,
  ) {
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // console.log(event.url.split('/'));
      this.url = event.url.split('/')
      // console.log("myurl = ",router.url)
    if(this.url[3]!='mini-bar'){
      this.apiStringURL = this.apiString.minton
      this.tablename = "SMBExtMinTon_&_LeanS"
      this.displayedColumns=[
        'select',
        'BusinessCode',
        'Country',
        'Tonnage',
        'Tonnage_From',
        'Tonnage_To',
        'Amount',
        'Currency',
        'action'
      ]
    }else{
      this.apiStringURL = this.apiString.minton_mini_bar
      this.tablename = "SMBExtMinTon_&_LeanS_Minibar"
      this.displayedColumns = [
        'select',
        'BusinessCode',
        'Customer_Group',
        'Customer',
        'Tonnage',
        'Tonnage_From',
        'Tonnage_To',
        'Amount',
        'Currency',
        'action'
      ]
    }
   });
  }
 
  ngOnInit(): void {
    this.getMinton()
  }

  getMinton() {   
    // this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.apiMethod.get_request_header(this.apiStringURL.list + "?tablename=" + this.tablename + "&offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<mintonModeData>(resultData.data)
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
    console.log(this.dataSource)
  }

  pageChangeCall(event: any) {
    console.log(event)
    this.pageOffset = event.pageIndex
    this.pageLength = event.pageSize
    this.getMinton()
  }

  applyFilter(filterValue: any) {
    console.log(filterValue.trim().toLowerCase())
    this.filterValue = filterValue
    this.pageOffset = 0
    this.pageLength = 500
    this.getMinton()
  }
  
  actionClicked(rowData: any, viewOn: any) {
    console.log(viewOn)
    if (viewOn === 'add') {
      const dialogRef = this.popup.open(AddPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            content: '',
            addURL: this.apiStringURL.add,
            type: this.url[3] == 'mini-bar' ? 'miniBar' : 'add',
            tablename : this.tablename,
            fileName: "minton_leans",
            fieldValue: this.displayedColumns.filter((x: any) =>
              x != 'select' && x != 'action'
            )
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The edit dialog was closed', result);
          this.getMinton()
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
            tablename : this.tablename,
            fileName: "minton_leans",
            // updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns.filter((x: any) =>
              x != 'select' && x != 'action'
            )
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getMinton()
      })
    }
    if (viewOn === 'delete' || viewOn === 'delete-all') {
      let deleteID: any = []
      if (viewOn === 'delete-all' && this.selection.selected.length === 0) {
        return this.apiMethod.popupMessage('error', 'Select At-least on record')
      }
      if (this.selection.selected.length > 0) {
        this.selection.selected.forEach((x: any) => {
          deleteID.push(x.id)
        })
      } else {
        deleteID = rowData
      }
      console.log(deleteID)
      const dialogRef = this.popup.open(WarnPopupComponent,
        {
          panelClass: 'my-full-screen-dialog',
          autoFocus: false,
          maxHeight: '90vh',
          data: {
            id: deleteID,
            url: this.apiStringURL.get + "?id=" + rowData.id,
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete',
            tablename : this.tablename,
            deleteURL: this.apiStringURL.delete
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        if (result != undefined) {
          this.getMinton()
          this.selection.clear()
        }
      })
    }  
  }
   
  uploadByXlFile() {
    if (this.url[3] != 'mini-bar') {
      this.router.navigate(['/smb/minton-leans/bulk-upload'])
    } else {
      this.router.navigate(['/smb/minton-leans/mini-bar/bulk-upload'])
    }
  }

  downloadInXlFile() {
    window.open(this.apiStringURL.download, "_blank")
  }

  isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource?.data);
  }

  checkboxLabel(row?: mintonModeData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.BusinessCode + 1}`;
  }
}
