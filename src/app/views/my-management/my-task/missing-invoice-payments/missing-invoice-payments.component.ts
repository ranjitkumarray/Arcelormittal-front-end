import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
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
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
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
    this.updateBreadCrumb()
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
