import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { offerStatus, pendingInvoiceStatus } from '../../managment-interface.serviec';
import { offer } from './dummydata';

@Component({
  selector: 'app-offer-status',
  templateUrl: './offer-status.component.html',
  styleUrls: ['./offer-status.component.scss']
})
export class OfferStatusComponent implements OnInit {
  offer: any = offer
  isShown: boolean = false; // hidden by default

  displayedColumns: string[] = [
    'offerid',
    'accountname',
    'division',
    'planttext',
    'rfqreference',
    'creationdatetime',
    'closedate',
    'pending_with',
    'creationuser',
    'tons',
    'items'

  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  dataSource: any;
  loadingRouteConfig: boolean = false;
  filterForm: any = FormGroup
  resultdata: any;
  breadCrumblocationsList: any = []
  pageEvent: any = PageEvent;
  totalCount: any;
  minDate: any

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.filterForm = this.fb.group({
      search_string: [''],
      customer: [''],
      // pending_with: [''],
      status: [''],
      posting_date_from: [''],
      posting_date_to: [''],
      offerid: [''],
      customer_ref: [''],
      offset: ['0'],
      limit: ['100']
    })
  }

  ngOnInit(): void {
    // this.getOfferStatus()
    this.updateBreadCrumb()
    console.log(this.filterForm)

  }
 
  toggleShow(type: any) {
    console.log(type)
    if (type) {
      this.isShown = !this.isShown;
    }
  }
  pageChangeCall(event: any) {
    console.log(event)
    this.filterForm.patchValue({
      offset: event.pageIndex,
      limit: event.pageSize
    })
    this.getOfferStatus()
  }
  updateBreadCrumb() {
    this.breadCrumblocationsList = [
      {
        'locationName': 'My Task',
        'link': '/management/offer-status',
        'currentPage': false
      },
      {
        'locationName': 'Offer Status',
        'link': '/management/offer-status',
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
  openMail() {
    window.location.href = ("mailto:ranjitkumarray25@outlook.com?subject=Level Validation &body=")
  }


  getOfferStatus() {
    if (this.filterForm.value.posting_date_from) {
      this.minDate = this.filterForm.value.posting_date_from
    }
    if (this.filterForm.value.posting_date_from || this.filterForm.value.posting_date_to) {
      if (this.filterForm.value.posting_date_from && this.filterForm.value.posting_date_to) {
        this.getResultData()
      } else {
        return
      }
    }
    if (this.filterForm.value.ageing_from || this.filterForm.value.ageing_to) {
      if (this.filterForm.value.ageing_from && this.filterForm.value.ageing_to) {
        this.getResultData()
      } else {
        return
      }
    } else {
      this.getResultData()
    }
  }
  getResultData() {
    this.loadingRouteConfig = true
    const pipe = new DatePipe('en-US');
    let body = {
      search_string: this.filterForm.value.search_string ? this.filterForm.value.search_string : 'all',
      customer: this.filterForm.value.customer ? this.filterForm.value.customer : 'all',
      offerid : this.filterForm.value.offerid ? this.filterForm.value.offerid : 'all',
      customer_ref : this.filterForm.value.customer_ref ? this.filterForm.value.customer_ref :'all',
      posting_date_from: this.filterForm.value.posting_date_from ? pipe.transform(this.filterForm.value.posting_date_from, 'yyyy-MM-dd') : 'all',
      posting_date_to: this.filterForm.value.posting_date_to ? pipe.transform(this.filterForm.value.posting_date_to, 'yyyy-MM-dd') : 'all',
      offset: this.filterForm.value.offset,
      limit: this.filterForm.value.limit
    }
    this.resultdata = []
    this.apiMethod.get_request_header_Param(this.apiString.myTask.offerStatus, body).subscribe((result: any) => {
      this.loadingRouteConfig = false
      this.resultdata = result
      this.totalCount = result.Coun
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
  resetAll(){
    this.filterForm.reset()
    this.filterForm.patchValue({
      limit: [100],
      offset: [0]
    })
    this.getOfferStatus()
  }
  
}
