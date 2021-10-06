import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
export interface wireData {
  'VKORG': any
  'COND_TYPE': any
  'DST_CH': any
  'DIV': any
  'Month_year': any
  'Amount': any
  'Customer_ID': any
  'Internal_Grade': any
}

export interface billetData {
  'VKORG': any
  'COND_TYPE': any
  'DST_CH': any
  'DIV': any
  'Month_year': any
  'Amount': any
  'WARENEMPFAENGER_NR': any
  'Materialnr': any
  'dRUCKSPERRE': any
}

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
  displayedColumns_scrap: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Model', 'Amount']
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
      let resultData:any=result
      let tablename = Object.keys(result)
      console.log(tablename)
      if(tablename[0]==='table_wire'){
        this.alloy_surcharge_wire = new MatTableDataSource<wireData>(JSON.parse(resultData.table_wire))
        setTimeout(() => {
          this.alloy_surcharge_wire.paginator = this.paginator;
          this.alloy_surcharge_wire.sort = this.sort;
        });

      }
      this.apiMethod.popupMessage('success')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })
  }
}
