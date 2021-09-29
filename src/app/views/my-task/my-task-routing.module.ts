import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTaskComponent } from './my-task.component';
import { OfferStatusComponent } from './offer-status/offer-status.component';

const routes: Routes = [
  {
    path: '', 
    component: MyTaskComponent,
    children: [
      {
        path:'offer-status',
        component:OfferStatusComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTaskRoutingModule { }
