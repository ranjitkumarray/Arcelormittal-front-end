import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = [
    'offer_id',
    'customer_name',
    'DIV',
    'deliver_mill',
    'incoterm',
    'cust_ref',
    'status',
    'created',
    'valid_till',
    'pending_with',
    'created_By',
    'volume',
    'items'

  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  dataSource: any;
  loadingRouteConfig: boolean = false;
  filterForm: any = FormGroup
  resultdata: any;
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search_string: [''],
      customer: [''],
      pending_with: [''],
      status: [''],
      created: [''],
      offerid: [''],
      customer_ref: ['']
    })
    this.getOfferStatus()

  }
  getOfferStatus() {
    console.log(this.filterForm.value)
    this.loadingRouteConfig = true
    let body = this.filterForm.value
    Object.keys(body).forEach(key => {
      if (body[key] === "") {
        body[key] = 'all';
      }
    });
    console.log(body)
    // this.resultdata = this.offer

    this.apiMethod.get_request_Param(this.apiString.myTask.offerStatus, body).subscribe((result: any) => {
      this.loadingRouteConfig = false
      this.resultdata = result
      this.dataSource = new MatTableDataSource<offerStatus>((this.resultdata.data))
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
