import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { Location } from "@angular/common";
import { wireData, billetData, scrapData } from '../alloy-scrap-interface.service';

@Component({
  selector: 'app-files-detailed-preview',
  templateUrl: './files-detailed-preview.component.html',
  styleUrls: ['./files-detailed-preview.component.scss']
})
export class FilesDetailedPreviewComponent implements OnInit {
  fileDetails: any;
  loadingRouteConfig: boolean = false
  displayedColumns_wire: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
  displayedColumns_billet: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'Materialnr', 'dRUCKSPERRE'];
  displayedColumns_scrap: string[] = [
    'VKORG',
    'COND_TYPE',
    'DST_CH',
    'DIV',
    'Month_year',
    'Model',
    'Amount',
    "Monthly_Deviation",
    "Product"]
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  alloy_surcharge_billet: any;
  alloy_surcharge_wire: any;
  scrap_surcharge_billet: any;
  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.Route.paramMap.subscribe(params => {
      this.fileDetails = params.get('fileDetails')
    })
    if (this.fileDetails) {
      console.log(atob(this.fileDetails))
      this.getDetails()
    }
  }
  getDetails() {
    let requiredData = atob(this.fileDetails).split('&')
    let body = {
      filename: requiredData[0],
      condition_type: requiredData[1],
      Batch_ID: requiredData[2]
    }
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiString.get_history_file_data, body).subscribe(result => {
      console.log(result)
      this.loadingRouteConfig = false
      let resultData: any = result
      let tablename = Object.keys(result)
      console.log(tablename)
      if (tablename[0] === 'table_wire') {
        this.alloy_surcharge_wire = new MatTableDataSource<wireData>((resultData.table_wire))
        setTimeout(() => {
          this.alloy_surcharge_wire.paginator = this.paginator;
          this.alloy_surcharge_wire.sort = this.sort;
        });

      }
      if (tablename[0] === 'table_billet') {
        this.alloy_surcharge_billet = new MatTableDataSource<billetData>((resultData.table_billet))
        setTimeout(() => {
          this.alloy_surcharge_billet.paginator = this.paginator;
          this.alloy_surcharge_billet.sort = this.sort;
        });
      }
      if (tablename[0] === 'table_scrap') {
        this.scrap_surcharge_billet = new MatTableDataSource<scrapData>((resultData.table_scrap))
        setTimeout(() => {
          this.scrap_surcharge_billet.paginator = this.paginator;
          this.scrap_surcharge_billet.sort = this.sort;
        });
      }
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while fatching file details')
    })
  }
  applyFilter(event: Event, searchFrom: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue, this.alloy_surcharge_wire,)
    if (searchFrom === "alloy_surcharge_billet") {
      this.alloy_surcharge_billet.filter = filterValue.trim().toLowerCase();
      if (this.alloy_surcharge_billet.paginator) {
        this.alloy_surcharge_billet.paginator.firstPage();
      }
    }
    if (searchFrom === "alloy_surcharge_wire") {
      this.alloy_surcharge_wire.filter = filterValue.trim().toLowerCase();

      if (this.alloy_surcharge_wire.paginator) {
        this.alloy_surcharge_wire.paginator.firstPage();
      }
    }
    if (searchFrom === "scrap_surcharge_billet") {
      this.scrap_surcharge_billet.filter = filterValue.trim().toLowerCase();

      if (this.scrap_surcharge_billet.paginator) {
        this.scrap_surcharge_billet.paginator.firstPage();
      }
    }
  }
  back() {
    this.location.back()
  }
}
