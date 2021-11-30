import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
    'customer_number',
    'customer_name',
    'sales_order_number',
    'invoice_number',
    'invoice_posting_date',
    'item_number',
    'amount',
    'invoice_aging',
    'invoice_aging_bucket',
  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  dataSource: any;
  loadingRouteConfig: boolean = false;
  filterForm: any = FormGroup
  isShown: boolean = false;
  breadCrumblocationsList: any = []
  resultdata: any = [];
  pageEvent: any = PageEvent;
  totalCount: any;
  customerNameList: any = [];
  invoicePostingDateList: any = [];
  minDate: any
  invoiceAgingList: any = [];
  invoiceAgingBucketDataList: any = [];
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search_string: [''],
      customer: [''],
      invoice_ageing: [''],
      invoice_posting_date_from: [''],
      invoice_posting_date_to: [''],
      invoice_ageing_bucket: [''],
      offset: ['0'],
      limit: ['100']
    })
    this.getOfferStatus()
    this.updateBreadCrumb()
  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    const pipe = new DatePipe('en-US');
    if (this.filterForm.value.invoice_posting_date_from) {
      this.minDate = this.filterForm.value.invoice_posting_date_from
    }
    let body = {
      search_string: this.filterForm.value.search_string ? this.filterForm.value.search_string : 'all',
      customer: this.filterForm.value.customer ? this.filterForm.value.customer : 'all',
      invoice_ageing: this.filterForm.value.invoice_ageing ? this.filterForm.value.invoice_ageing : 'all',
      invoice_posting_date_from: this.filterForm.value.invoice_posting_date_from ? pipe.transform(this.filterForm.value.invoice_posting_date_from, 'yyyy-MM-dd') : 'all',
      invoice_posting_date_to: this.filterForm.value.invoice_posting_date_to ? pipe.transform(this.filterForm.value.invoice_posting_date_to, 'yyyy-MM-dd') : 'all',
      invoice_ageing_bucket: this.filterForm.value.invoice_ageing_bucket ? this.filterForm.value.invoice_ageing_bucket : 'all',
      offset: this.filterForm.value.offset,
      limit: this.filterForm.value.limit
    }
    this.resultdata = []
    this.apiMethod.get_request_Param(this.apiString.myTask.missingInvoicePayment, body).subscribe((result: any) => {
      this.loadingRouteConfig = false
      this.resultdata = result
      this.totalCount = result.Count
      this.customerNameList = this.resultdata.customer_name
      this.invoicePostingDateList = this.resultdata.invoice_posting_date
      this.invoiceAgingList = (this.resultdata.invoice_aging)
      this.invoiceAgingBucketDataList = (this.resultdata.invoice_aging_bucket_data)
      this.dataSource = new MatTableDataSource<pendingInvoiceStatus>(this.resultdata.data)
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }, 1000);

    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while getting offer status')
    })
  }
  pageChangeCall(event: any) {
    console.log(event)
    this.filterForm.patchValue({
      offset: event.pageIndex,
      limit: event.pageSize
    })
    this.getOfferStatus()
  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
  updateBreadCrumb() {
    this.breadCrumblocationsList = [
      {
        'locationName': 'My Task',
        'link': '/management/missing-invoice-payment',
        'currentPage': false
      },
      {
        'locationName': 'Missing Invoice Payment',
        'link': '/management/missing-invoice-payment',
        'currentPage': true
      }
    ];

    window.scrollTo(0, 0);
    console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }
}
