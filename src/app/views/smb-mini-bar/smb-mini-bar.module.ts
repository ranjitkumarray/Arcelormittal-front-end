import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmbMiniBarRoutingModule } from './smb-mini-bar-routing.module';
import { SmbMiniBarComponent } from './smb-mini-bar.component';
import { DeliveryMillListComponent } from './delivery-mill/delivery-mill-list/delivery-mill-list.component';
import { DeliveryMillUploadComponent } from './delivery-mill/delivery-mill-upload/delivery-mill-upload.component';
import { DeliveryMillEditComponent } from './delivery-mill/delivery-mill-edit/delivery-mill-edit.component';
import { ExtraCertificateListComponent } from './extra-certificate/extra-certificate-list/extra-certificate-list.component';
import { ExtraCertificateUploadComponent } from './extra-certificate/extra-certificate-upload/extra-certificate-upload.component';
import { ExtraCertificateEditComponent } from './extra-certificate/extra-certificate-edit/extra-certificate-edit.component';
import { FreightParityListComponent } from './freight-parity/freight-parity-list/freight-parity-list.component';
import { FreightParityUploadComponent } from './freight-parity/freight-parity-upload/freight-parity-upload.component';
import { FreightParityEditComponent } from './freight-parity/freight-parity-edit/freight-parity-edit.component';
import { GradeListComponent } from './grade/grade-list/grade-list.component';
import { GradeUploadComponent } from './grade/grade-upload/grade-upload.component';
import { GradeEditComponent } from './grade/grade-edit/grade-edit.component';
import { LengthLogisticListComponent } from './length-logistic/length-logistic-list/length-logistic-list.component';
import { LengthLogisticUploadComponent } from './length-logistic/length-logistic-upload/length-logistic-upload.component';
import { LengthLogisticEditComponent } from './length-logistic/length-logistic-edit/length-logistic-edit.component';
import { LengthProductionListComponent } from './length-production/length-production-list/length-production-list.component';
import { LengthProductionUploadComponent } from './length-production/length-production-upload/length-production-upload.component';
import { LengthProductionEditComponent } from './length-production/length-production-edit/length-production-edit.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileUploadComponent } from './profile/profile-upload/profile-upload.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileLberiaItalyListComponent } from './profile-lberia-italy/profile-lberia-italy-list/profile-lberia-italy-list.component';
import { ProfileLberiaItalyUploadComponent } from './profile-lberia-italy/profile-lberia-italy-upload/profile-lberia-italy-upload.component';
import { ProfileLberiaItalyEditComponent } from './profile-lberia-italy/profile-lberia-italy-edit/profile-lberia-italy-edit.component';
import { TransportModeListComponent } from './transport-mode/transport-mode-list/transport-mode-list.component';
import { TransportModeUploadComponent } from './transport-mode/transport-mode-upload/transport-mode-upload.component';
import { TransportModeEditComponent } from './transport-mode/transport-mode-edit/transport-mode-edit.component';
import { IncotermExceptionsListComponent } from './incoterm-exceptions/incoterm-exceptions-list/incoterm-exceptions-list.component';
import { IncotermExceptionsUploadComponent } from './incoterm-exceptions/incoterm-exceptions-upload/incoterm-exceptions-upload.component';
import { IncotermExceptionsEditComponent } from './incoterm-exceptions/incoterm-exceptions-edit/incoterm-exceptions-edit.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { BasePriceAdditionListComponent } from './base-price/base-price-addition-list/base-price-addition-list.component';
import { BulkUploadBasePriceAdditionComponent } from './base-price/bulk-upload-base-price-addition/bulk-upload-base-price-addition.component';
import { EditBasePriceAdditionComponent } from './base-price/edit-base-price-addition/edit-base-price-addition.component';
import { EditPopupComponent } from './smb-mini-bar-popup-modal/edit-popup/edit-popup.component';
import { WarnPopupComponent } from './smb-mini-bar-popup-modal/warn-popup/warn-popup.component';


@NgModule({
  declarations: [
    SmbMiniBarComponent,
    BasePriceAdditionListComponent,
    EditBasePriceAdditionComponent,
    BulkUploadBasePriceAdditionComponent,
    WarnPopupComponent,
    EditPopupComponent,
    DeliveryMillListComponent,
    DeliveryMillUploadComponent,
    DeliveryMillEditComponent,
    ExtraCertificateListComponent,
    ExtraCertificateUploadComponent,
    ExtraCertificateEditComponent,
    FreightParityListComponent,
    FreightParityUploadComponent,
    FreightParityEditComponent,
    GradeListComponent,
    GradeUploadComponent,
    GradeEditComponent,
    LengthLogisticListComponent,
    LengthLogisticUploadComponent,
    LengthLogisticEditComponent,
    LengthProductionListComponent,
    LengthProductionUploadComponent,
    LengthProductionEditComponent,
    ProfileListComponent,
    ProfileUploadComponent,
    ProfileEditComponent,
    ProfileLberiaItalyListComponent,
    ProfileLberiaItalyUploadComponent,
    ProfileLberiaItalyEditComponent,
    TransportModeListComponent,
    TransportModeUploadComponent,
    TransportModeEditComponent,
    IncotermExceptionsListComponent,
    IncotermExceptionsUploadComponent,
    IncotermExceptionsEditComponent,
  ],
  imports: [
    CommonModule,
    SmbMiniBarRoutingModule,
    MaterialsModule
  ]
})
export class SmbMiniBarModule { }
