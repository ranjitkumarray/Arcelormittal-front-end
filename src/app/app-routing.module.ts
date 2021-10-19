import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alloy-scrap/upload',
    pathMatch: "full"
  },
  { path: 'alloy-scrap', loadChildren: () => import('./views/alloy-scrap/alloy-scrap.module').then(m => m.AlloyScrapModule) },
  { path: 'smb', loadChildren: () => import('./views/smb/smb.module').then(m => m.SmbModule) },
  // { path: 'smb-mini-bar', loadChildren: () => import('./views/smb-mini-bar/smb-mini-bar.module').then(m => m.SmbMiniBarModule) },
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
