import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { pendingInvoiceStatus } from '../../managment-interface.serviec';

@Component({
  selector: 'app-missing-invoice-payments',
  templateUrl: './missing-invoice-payments.component.html',
  styleUrls: ['./missing-invoice-payments.component.scss']
})
export class MissingInvoicePaymentsComponent implements OnInit {

  displayedColumns: string[] = [
    'Customer_Number',
    'Customer_Name',
    'Sales_Order_Number',
    'Invoice_Number',
    'Invoice_Posting_Date',
    'Item_Numbar',
    'Amount',
    'Invoice_Ageing',
    'Invoice_Ageing_bucket',
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
    this.filterForm = this.fb.group({
      searchInput: [''],
      Customer: [''],
      Invoice_Ageing: [''],
      Invoice_Posting_Date: [''],
      Invoice_Ageing_Bucket: [''],

    })
    this.getOfferStatus()
  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    this.apiMethod.get_request(this.apiString.myTask.missingInvoicePayment).subscribe((result: any) => {
      this.loadingRouteConfig = false
      this.dataSource = new MatTableDataSource<pendingInvoiceStatus>(result.data)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }, 1000);

    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while getting offer status')
    })
  }
}
