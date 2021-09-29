import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOfferComponent } from './my-offer.component';

const routes: Routes = [{ path: '', component: MyOfferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOfferRoutingModule { }
