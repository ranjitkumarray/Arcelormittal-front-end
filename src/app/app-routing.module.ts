import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/my-task/my-task.module').then(m => m.MyTaskModule)
  },
  { path: 'my-offer', loadChildren: () => import('./views/my-offer/my-offer.module').then(m => m.MyOfferModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
