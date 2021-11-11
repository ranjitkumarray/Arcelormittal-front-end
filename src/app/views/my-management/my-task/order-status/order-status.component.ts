import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { offerStatus } from '../../managment-interface.serviec';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  displayedColumns: string[] = [
    'Sales_Doc_Number',
    'Sales_Doc_item_Number',
    'Order_Status',
    'Confirmed_Delivery_Date',
    'Delivering_Plant',
    'Sold_To',
    'Ship_To',
    'DELV_WEEK',
    'QTY',
    'Cust_Ref'
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
      Order_Status: [''],
      Ship_To: [''],
      Sales_Doc_Number: [''],
      DELV_WEEK: [''],

    })
  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request(this.apiString.myTask.offerStatus).subscribe((result: any) => {
      this.loadingRouteConfig = true
      this.dataSource = new MatTableDataSource<offerStatus>(JSON.parse(result.data))
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
