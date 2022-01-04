import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { offerStatus } from '../../managment-interface.serviec';
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

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.filterForm = this.fb.group({
      search_string: [''],
      customer: [''],
      // pending_with: [''],
      status: [''],
      created: [''],
      offerid: [''],
      customer_ref: [''],
      // offset: ['0'],
      // limit: ['100']
    })
  }

  ngOnInit(): void {
    this.getOfferStatus()
    this.updateBreadCrumb()

  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    let body = this.filterForm.value
    Object.keys(body).forEach(key => {
      if (body[key] === 'limit' || body[key] === 'offset') {
      } else {
        if (body[key] === "") {
          body[key] = 'all';
        }
      }
    });
    console.log(body)
    // this.resultdata = this.offer
    this.resultdata = []
    // this.dataSource=""
    setTimeout(() => {
      this.apiMethod.get_request_header_Param(this.apiString.myTask.offerStatus, body).subscribe((result: any) => {
        this.loadingRouteConfig = false
        this.resultdata = result     
         this.totalCount=result.Count
        this.dataSource = new MatTableDataSource<offerStatus>((this.resultdata.data))
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }, 1000);

      }, error => {
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('error', 'Error while getting offer status')
      })
    }, 1000);

  }
  toggleShow() {
    this.isShown = !this.isShown;
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
  openMail(){
    window.location.href=("mailto:ranjitkumarray25@outlook.com?subject=Level Validation &body=") 
  }
}
