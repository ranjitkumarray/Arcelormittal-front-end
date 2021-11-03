import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { MyManagementComponent } from './my-management.component';
import { CustomerVolumeComponent } from './my-task/customer-volume/customer-volume.component';
import { MissingInvoicePaymentsComponent } from './my-task/missing-invoice-payments/missing-invoice-payments.component';
import { OfferStatusComponent } from './my-task/offer-status/offer-status.component';
import { OrderStatusComponent } from './my-task/order-status/order-status.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'offer-status',
        component: OfferStatusComponent
      },
      {
        path: "order-status",
        component: OrderStatusComponent
      },
      {
        path: "customer-volume",
        component: CustomerVolumeComponent
      },
      {
        path: "missing-invoice-payment",
        component: MissingInvoicePaymentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyManagementRoutingModule { }
