import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './common-use/sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: "full"
  },
  { path: 'alloy-scrap', loadChildren: () => import('./views/alloy-scrap/alloy-scrap.module').then(m => m.AlloyScrapModule) },
  { path: 'smb', loadChildren: () => import('./views/smb/smb.module').then(m => m.SmbModule) },
  { path: 'registration', loadChildren: () => import('./views/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
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
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 64],
    initialNavigation: 'enabled',
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
