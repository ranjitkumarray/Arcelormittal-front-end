import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOfferRoutingModule } from './my-offer-routing.module';
import { MyOfferComponent } from './my-offer.component';


@NgModule({
  declarations: [
    MyOfferComponent
  ],
  imports: [
    CommonModule,
    MyOfferRoutingModule
  ]
})
export class MyOfferModule { }
