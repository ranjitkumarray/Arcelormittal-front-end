import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTaskRoutingModule } from './my-task-routing.module';
import { MyTaskComponent } from './my-task.component';
import { OfferStatusComponent } from './offer-status/offer-status.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { CustomerVolumeComponent } from './customer-volume/customer-volume.component';
import { MissingInvoiceComponent } from './missing-invoice/missing-invoice.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { UploadTaskFileComponent } from './upload-task-file/upload-task-file.component';


@NgModule({
  declarations: [
    MyTaskComponent,
    OfferStatusComponent,
    OrderStatusComponent,
    CustomerVolumeComponent,
    MissingInvoiceComponent,
    FilterOptionsComponent,
    UploadTaskFileComponent,
  ],
  imports: [
    CommonModule,
    MyTaskRoutingModule,
    MaterialsModule
  ]
})
export class MyTaskModule { }
