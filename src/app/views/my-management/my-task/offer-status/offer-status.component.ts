import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { offerStatus } from '../../managment-interface.serviec';

@Component({
  selector: 'app-offer-status',
  templateUrl: './offer-status.component.html',
  styleUrls: ['./offer-status.component.scss']
})
export class OfferStatusComponent implements OnInit {
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
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getOfferStatus()
    this.filterForm = this.fb.group({
      searchInput: [''],
      customer: [''],
      pending_with: [''],
      status: [''],
      created: [''],
      order_id: [''],
      customer_ref: ['']
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
