import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { OfferStatusComponent } from './offer-status/offer-status.component';
import { OrderStatusComponent } from './order-status/order-status.component';

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
        path: 'order-status',
        component: OrderStatusComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTaskRoutingModule { }
