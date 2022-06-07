import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlloyScrapRoutingModule } from './alloy-scrap-routing.module';
import { AlloyScrapComponent } from './alloy-scrap.component';
import { UploadAlloyScrapComponent } from './upload-alloy-scrap/upload-alloy-scrap.component';
import { HistoryAlloyScrapComponent } from './history-alloy-scrap/history-alloy-scrap.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { FilesDetailedPreviewComponent } from './files-detailed-preview/files-detailed-preview.component';
import { ValidatePopupComponent } from './upload-alloy-scrap/validate-popup/validate-popup.component';


@NgModule({
  declarations: [
    AlloyScrapComponent,
    UploadAlloyScrapComponent,
    HistoryAlloyScrapComponent,
    FilesDetailedPreviewComponent,
    ValidatePopupComponent
  ],
  imports: [
    CommonModule,
    AlloyScrapRoutingModule,
    MaterialsModule

  ]
})
export class AlloyScrapModule { }
