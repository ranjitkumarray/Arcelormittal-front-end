import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { UserManagementComponent } from './user-management.component';
import { GroupUserComponent } from './user/group-user/group-user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'management',
        component: SingleUserComponent
      },
      {
        path: 'group-management',
        component: GroupUserComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
