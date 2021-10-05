import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmbRoutingModule } from './smb-routing.module';
import { SmbComponent } from './smb.component';


@NgModule({
  declarations: [
    SmbComponent
  ],
  imports: [
    CommonModule,
    SmbRoutingModule
  ]
})
export class SmbModule { }
