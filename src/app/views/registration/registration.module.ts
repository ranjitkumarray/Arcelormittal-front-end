import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { RegistrationRoutingModule } from './registration-routing.module';

import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserGroupManagementComponent } from './user-group-management/user-group-management.component';
import { FormsModule } from '@angular/forms';
import { ResetComponent } from './login/reset/reset.component';


@NgModule({
  declarations: [
    
    LoginComponent,
    UserManagementComponent,
    UserGroupManagementComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialsModule,
    FormsModule
]
  
})
export class RegistrationModule { }
