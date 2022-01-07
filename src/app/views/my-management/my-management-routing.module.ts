import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { AuthGuardService } from 'src/app/services/authGard.service';
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
        component: OfferStatusComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "order-status",
        component: OrderStatusComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "customer-volume",
        component: CustomerVolumeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "missing-invoice-payment",
        component: MissingInvoicePaymentsComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyManagementRoutingModule { }
