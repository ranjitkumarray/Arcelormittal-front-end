import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { disearlyptmData } from '../smb-interface.service';
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
  table_name:any;
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
  selection = new SelectionModel<disearlyptmData>(true, []);
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
      this.apiStringURL = this.apiString.generic
      this.table_name = "SMBDisEarlyPmt"
      this.displayedColumns=[
        'select',
        'sequence_id',
        'BusinessCode',
        'Country',
        'Value',
        'Unit',
        'action'
      ]
    }else{
      this.apiStringURL = this.apiString.generic
      this.table_name = "SMBDisEarlyPmt_Minibar"
      this.displayedColumns = [
        'select',
        'sequence_id',
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
    this.getEarlyPtm()
    
  }
  getEarlyPtm() {   
    // this.loadingRouteConfig = true
    let searchString: any
    if (this.searchValue) {
      searchString = this.searchValue
    } else {
      searchString = "all"
    }
    this.apiMethod.get_request_header(this.apiStringURL.list + "?table_name=" + this.table_name + "&offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
      console.log(result)
      let resultData: any = result
      this.totalCount = resultData.totalCount
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<disearlyptmData>(resultData.data)
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
    this.getEarlyPtm()
  }

  applyFilter(filterValue: any) {
    console.log(filterValue.trim().toLowerCase())
    this.filterValue = filterValue
    this.pageOffset = 0
    this.pageLength = 500
    this.getEarlyPtm()
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
            table_name: this.table_name,
            fileName: "disearly_pmt",
            fieldValue: this.displayedColumns.filter((x: any) =>
              x != 'select' && x != 'sequence_id' && x != 'action'
            )
            
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The edit dialog was closed', result);
          this.getEarlyPtm()
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
            url: this.apiStringURL.get + "?id=" + rowData.id + "&table_name=" + this.table_name,
            type: this.url[3] === 'mini-bar' ? 'miniBar' : 'edit',
            table_name: this.table_name,
            fileName: "disearly_pmt",
            updateURL: this.apiStringURL.update,
            fieldValue: this.displayedColumns.filter((x: any) =>
              x != 'select' && x != 'action'
            )
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The edit dialog was closed', result);
        this.getEarlyPtm()
      })
    }
    if (viewOn === 'delete' || viewOn === 'delete-all') {
      let deleteID: any = [this.table_name]
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
            url: this.apiStringURL.get + "?id=" + rowData.id  + "&table_name=" + this.table_name,
            type: this.url[3] === 'mini-bar' ? 'delete-min-bar' : 'delete',
            table_name: this.table_name,
            deleteURL: this.apiStringURL.delete
          },
        });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The Delete dialog was closed', result);
        if (result != undefined) {
          this.getEarlyPtm()
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
    window.open(this.apiStringURL.download+ "?table_name=" + this.table_name, "_blank")
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

  checkboxLabel(row?: disearlyptmData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Business_Code + 1}`;
  }
}