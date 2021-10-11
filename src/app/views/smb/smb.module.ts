import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmbRoutingModule } from './smb-routing.module';
import { SmbComponent } from './smb.component';
import { BasePriceAdditionListComponent } from './base-price/base-price-addition-list/base-price-addition-list.component';
import { EditBasePriceAdditionComponent } from './base-price/edit-base-price-addition/edit-base-price-addition.component';
import { BulkUploadBasePriceAdditionComponent } from './base-price/bulk-upload-base-price-addition/bulk-upload-base-price-addition.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { WarnPopupComponent } from './base-price/warn-popup/warn-popup.component';


@NgModule({
  declarations: [
    SmbComponent,
    BasePriceAdditionListComponent,
    EditBasePriceAdditionComponent,
    BulkUploadBasePriceAdditionComponent,
    WarnPopupComponent,
  ],
  imports: [
    CommonModule,
    SmbRoutingModule,
    MaterialsModule
  ]
})
export class SmbModule { }
