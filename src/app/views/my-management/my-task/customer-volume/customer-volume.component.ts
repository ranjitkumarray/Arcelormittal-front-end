import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { offerStatus } from '../../managment-interface.serviec';

@Component({
  selector: 'app-customer-volume',
  templateUrl: './customer-volume.component.html',
  styleUrls: ['./customer-volume.component.scss']
})
export class CustomerVolumeComponent implements OnInit {
  displayedColumns: string[] = [
    'Customer_number',
    'Customer_name',
    'Total_Qty_Booked',
    'Total_Qty_Offered',
    'Accepted_Offer',
    'Total_Qty_Sales',
    'FY_Budget_For_Customer',
    'Order_Vs_Offer',
    'Order_Vs_Budget',
  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  dataSource: any;
  loadingRouteConfig: boolean = false;
  filterForm: any = FormGroup
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getOfferStatus()
    this.filterForm = this.fb.group({
      searchInput: [''],
      Customer: [''],
    })
  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request_header(this.apiString.myTask.offerStatus).subscribe((result: any) => {
      this.loadingRouteConfig = false
      console.log(result)
      this.dataSource = new MatTableDataSource<any>((result.data))
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }, 3000);

    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while getting offer status')
    })
  }
}
