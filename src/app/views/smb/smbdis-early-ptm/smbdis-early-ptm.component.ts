import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { disearlyptm } from '../smb-interface.service';
import { EditPopupComponent } from '../smb-modal/edit-popup/edit-popup.component';
import { WarnPopupComponent } from '../smb-modal/warn-popup/warn-popup.component';
import { AddPopupComponent } from '../smb-modal/add-popup/add-popup.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-smbdis-early-ptm',
  templateUrl: './smbdis-early-ptm.component.html',
  styleUrls: ['./smbdis-early-ptm.component.scss']
})
export class SMBDisEarlyPtmComponent implements OnInit {

  loadingRouteConfig: boolean = false
  searchValue: any
  displayedColumns: string[] = [];
  tablename:any;
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
  selection = new SelectionModel<disearlyptm>(true, []);
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
      console.log("myurl = ",router.url)
    if(this.url[3]!='mini-bar'){
      this.apiStringURL = this.apiString.minton
      this.tablename = "SMBDisEarlyPtm"
      this.displayedColumns=[
        'select',
        'BusinessCode',
        'Country',
        'Value',
        'Unit',
        'action'
      ]
    }else{
      this.apiStringURL = this.apiString.minton_mini_bar
      this.tablename = "SMBDisEarlyPmt_Minibar"
      this.displayedColumns = [
        'select',
        'BusinessCode',
        'Customer_Group',
        'Customer',
        'Value',
        'Unit',
        'action'
      ]
    }
   });
  }


  ngOnInit(): void {
    this.getMinton()
    
  }
  getMinton() {   
  
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
            tablename: this.tablename,
            fileName: "disearly_ptm",
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
            tablename: this.tablename,
            fileName: "disearly_ptm",
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
            tablename: this.tablename,
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
      this.router.navigate(['/smb/dis-earlyptm/bulk-upload'])
    } else {
      this.router.navigate(['/smb/dis-earlyptm/mini-bar/bulk-upload'])
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

  checkboxLabel(row?: disearlyptm): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.BusinessCode + 1}`;
  }
}
