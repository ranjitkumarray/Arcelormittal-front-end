import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { AuthGuardService } from 'src/app/services/authGard.service';
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
        component: SingleUserComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'group-management',
        component: GroupUserComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
