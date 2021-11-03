import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyManagementRoutingModule } from './my-management-routing.module';
import { MyManagementComponent } from './my-management.component';
import { OfferStatusComponent } from './my-task/offer-status/offer-status.component';
import { OrderStatusComponent } from './my-task/order-status/order-status.component';
import { CustomerVolumeComponent } from './my-task/customer-volume/customer-volume.component';
import { MissingInvoicePaymentsComponent } from './my-task/missing-invoice-payments/missing-invoice-payments.component';


@NgModule({
  declarations: [
    MyManagementComponent,
    OfferStatusComponent,
    OrderStatusComponent,
    CustomerVolumeComponent,
    MissingInvoicePaymentsComponent
  ],
  imports: [
    CommonModule,
    MyManagementRoutingModule
  ]
})
export class MyManagementModule { }
