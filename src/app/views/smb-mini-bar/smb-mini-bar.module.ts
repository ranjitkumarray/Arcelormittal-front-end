import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmbMiniBarRoutingModule } from './smb-mini-bar-routing.module';
import { SmbMiniBarComponent } from './smb-mini-bar.component';


@NgModule({
  declarations: [
    SmbMiniBarComponent
  ],
  imports: [
    CommonModule,
    SmbMiniBarRoutingModule
  ]
})
export class SmbMiniBarModule { }
