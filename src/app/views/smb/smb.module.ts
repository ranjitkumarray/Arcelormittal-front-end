import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmbRoutingModule } from './smb-routing.module';
import { SmbComponent } from './smb.component';
import { BasePriceAdditionListComponent } from './base-price/base-price-addition-list/base-price-addition-list.component';
import { EditBasePriceAdditionComponent } from './base-price/edit-base-price-addition/edit-base-price-addition.component';
import { BulkUploadBasePriceAdditionComponent } from './base-price/bulk-upload-base-price-addition/bulk-upload-base-price-addition.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { EditPopupComponent } from './smb-modal/edit-popup/edit-popup.component';
import { WarnPopupComponent } from './smb-modal/warn-popup/warn-popup.component';
import { DeliveryMillListComponent } from './delivery-mill-list/delivery-mill-list.component';
import { ExtraCertificateListComponent } from './extra-certificate-list/extra-certificate-list.component';
import { FreightParityListComponent } from './freight-parity-list/freight-parity-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { LengthLogisticListComponent } from './length-logistic-list/length-logistic-list.component';
import { LengthProductionListComponent } from './length-production-list/length-production-list.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileLberiaItalyListComponent } from './profile-lberia-italy-list/profile-lberia-italy-list.component';
import { TransportModeListComponent } from './transport-mode/transport-mode-list/transport-mode-list.component';
import { TransportModeUploadComponent } from './transport-mode/transport-mode-upload/transport-mode-upload.component';
import { TransportModeEditComponent } from './transport-mode/transport-mode-edit/transport-mode-edit.component';
import { IncotermExceptionsListComponent } from './incoterm-exceptions/incoterm-exceptions-list/incoterm-exceptions-list.component';
import { IncotermExceptionsUploadComponent } from './incoterm-exceptions/incoterm-exceptions-upload/incoterm-exceptions-upload.component';
import { IncotermExceptionsEditComponent } from './incoterm-exceptions/incoterm-exceptions-edit/incoterm-exceptions-edit.component';
import { UploadValidateModalComponent } from './smb-modal/upload-validate-modal/upload-validate-modal.component';
import { AddPopupComponent } from './smb-modal/add-popup/add-popup.component';


@NgModule({
  declarations: [
    SmbComponent,
    BasePriceAdditionListComponent,
    EditBasePriceAdditionComponent,
    BulkUploadBasePriceAdditionComponent,
    WarnPopupComponent,
    EditPopupComponent,
    DeliveryMillListComponent,
    ExtraCertificateListComponent,
    FreightParityListComponent,
    GradeListComponent,
    LengthLogisticListComponent,
    LengthProductionListComponent,
    ProfileListComponent,
    ProfileLberiaItalyListComponent,
    TransportModeListComponent,
    TransportModeUploadComponent,
    TransportModeEditComponent,
    IncotermExceptionsListComponent,
    IncotermExceptionsUploadComponent,
    IncotermExceptionsEditComponent,
    UploadValidateModalComponent,
    AddPopupComponent,
  ],
  imports: [
    CommonModule,
    SmbRoutingModule,
    MaterialsModule
  ]
})
export class SmbModule { }
