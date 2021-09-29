import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { MyTaskComponent } from './my-task.component';
import { OfferStatusComponent } from './offer-status/offer-status.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { CustomerVolumeComponent } from './customer-volume/customer-volume.component';
import { MissingInvoiceComponent } from './missing-invoice/missing-invoice.component';


@NgModule({
  declarations: [
    MyTaskComponent,
    OfferStatusComponent,
    OrderStatusComponent,
    CustomerVolumeComponent,
    MissingInvoiceComponent
  ],
  imports: [
    CommonModule,
    MyTaskRoutingModule
  ]
})
export class MyTaskModule { }
