import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './common-use/sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alloy-scrap/upload',
    pathMatch: "full"
  },
  { path: 'alloy-scrap', loadChildren: () => import('./views/alloy-scrap/alloy-scrap.module').then(m => m.AlloyScrapModule) },
  { path: 'smb', loadChildren: () => import('./views/smb/smb.module').then(m => m.SmbModule) },
  {
    path: '**',
    component: SidebarComponent,
    children: [{
      path: '',
      component: PageNotFoundComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
