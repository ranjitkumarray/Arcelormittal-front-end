import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { GroupUserComponent } from './user/group-user/group-user.component';
import { MaterialsModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    UserManagementComponent,
    SingleUserComponent,
    GroupUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MaterialsModule
  ]
})
export class UserManagementModule { }
