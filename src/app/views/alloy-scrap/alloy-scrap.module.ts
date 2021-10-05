import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlloyScrapRoutingModule } from './alloy-scrap-routing.module';
import { AlloyScrapComponent } from './alloy-scrap.component';
import { UploadAlloyScrapComponent } from './upload-alloy-scrap/upload-alloy-scrap.component';
import { HistoryAlloyScrapComponent } from './history-alloy-scrap/history-alloy-scrap.component';
import { MaterialsModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    AlloyScrapComponent,
    UploadAlloyScrapComponent,
    HistoryAlloyScrapComponent
  ],
  imports: [
    CommonModule,
    AlloyScrapRoutingModule,
    MaterialsModule

  ]
})
export class AlloyScrapModule { }
