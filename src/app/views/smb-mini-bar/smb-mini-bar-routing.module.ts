import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { BasePriceAdditionListComponent } from './base-price/base-price-addition-list/base-price-addition-list.component';
import { BulkUploadBasePriceAdditionComponent } from './base-price/bulk-upload-base-price-addition/bulk-upload-base-price-addition.component';
import { EditBasePriceAdditionComponent } from './base-price/edit-base-price-addition/edit-base-price-addition.component';
import { DeliveryMillEditComponent } from './delivery-mill/delivery-mill-edit/delivery-mill-edit.component';
import { DeliveryMillListComponent } from './delivery-mill/delivery-mill-list/delivery-mill-list.component';
import { DeliveryMillUploadComponent } from './delivery-mill/delivery-mill-upload/delivery-mill-upload.component';
import { ExtraCertificateEditComponent } from './extra-certificate/extra-certificate-edit/extra-certificate-edit.component';
import { ExtraCertificateListComponent } from './extra-certificate/extra-certificate-list/extra-certificate-list.component';
import { ExtraCertificateUploadComponent } from './extra-certificate/extra-certificate-upload/extra-certificate-upload.component';
import { FreightParityEditComponent } from './freight-parity/freight-parity-edit/freight-parity-edit.component';
import { FreightParityListComponent } from './freight-parity/freight-parity-list/freight-parity-list.component';
import { FreightParityUploadComponent } from './freight-parity/freight-parity-upload/freight-parity-upload.component';
import { GradeEditComponent } from './grade/grade-edit/grade-edit.component';
import { GradeListComponent } from './grade/grade-list/grade-list.component';
import { GradeUploadComponent } from './grade/grade-upload/grade-upload.component';
import { IncotermExceptionsEditComponent } from './incoterm-exceptions/incoterm-exceptions-edit/incoterm-exceptions-edit.component';
import { IncotermExceptionsListComponent } from './incoterm-exceptions/incoterm-exceptions-list/incoterm-exceptions-list.component';
import { IncotermExceptionsUploadComponent } from './incoterm-exceptions/incoterm-exceptions-upload/incoterm-exceptions-upload.component';
import { LengthLogisticEditComponent } from './length-logistic/length-logistic-edit/length-logistic-edit.component';
import { LengthLogisticListComponent } from './length-logistic/length-logistic-list/length-logistic-list.component';
import { LengthLogisticUploadComponent } from './length-logistic/length-logistic-upload/length-logistic-upload.component';
import { LengthProductionEditComponent } from './length-production/length-production-edit/length-production-edit.component';
import { LengthProductionListComponent } from './length-production/length-production-list/length-production-list.component';
import { LengthProductionUploadComponent } from './length-production/length-production-upload/length-production-upload.component';
import { ProfileLberiaItalyEditComponent } from './profile-lberia-italy/profile-lberia-italy-edit/profile-lberia-italy-edit.component';
import { ProfileLberiaItalyListComponent } from './profile-lberia-italy/profile-lberia-italy-list/profile-lberia-italy-list.component';
import { ProfileLberiaItalyUploadComponent } from './profile-lberia-italy/profile-lberia-italy-upload/profile-lberia-italy-upload.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileUploadComponent } from './profile/profile-upload/profile-upload.component';
import { TransportModeEditComponent } from './transport-mode/transport-mode-edit/transport-mode-edit.component';
import { TransportModeListComponent } from './transport-mode/transport-mode-list/transport-mode-list.component';
import { TransportModeUploadComponent } from './transport-mode/transport-mode-upload/transport-mode-upload.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: "base-price",
        children: [
          {
            path: "list",
            component: BasePriceAdditionListComponent
          },

          {
            path: 'edit',
            component: EditBasePriceAdditionComponent
          },
          {
            path: "bulk-upload",
            component: BulkUploadBasePriceAdditionComponent
          },

        ]
      },
      {
        path: "delivery-mill",
        children: [
          {
            path: "list",
            component: DeliveryMillListComponent
          },

          {
            path: 'edit',
            component: DeliveryMillEditComponent
          },
          {
            path: "bulk-upload",
            component: DeliveryMillUploadComponent
          },

        ]
      },
      {
        path: "extra-certificate",
        children: [
          {
            path: "list",
            component: ExtraCertificateListComponent
          },
          {
            path: 'edit',
            component: ExtraCertificateEditComponent
          },
          {
            path: "bulk-upload",
            component: ExtraCertificateUploadComponent
          },

        ]
      },
      {
        path: "freight-parity",
        children: [
          {
            path: "list",
            component: FreightParityListComponent
          },

          {
            path: 'edit',
            component: FreightParityEditComponent
          },
          {
            path: "bulk-upload",
            component: FreightParityUploadComponent
          },

        ]
      },
      {
        path: "grade",
        children: [
          {
            path: "list",
            component: GradeListComponent
          },

          {
            path: 'edit',
            component: GradeEditComponent
          },
          {
            path: "bulk-upload",
            component: GradeUploadComponent
          },

        ]
      },
      {
        path: "length-logistic",
        children: [
          {
            path: "list",
            component: LengthLogisticListComponent
          },

          {
            path: 'edit',
            component: LengthLogisticEditComponent
          },
          {
            path: "bulk-upload",
            component: LengthLogisticUploadComponent
          },

        ]
      },
      {
        path: "length-production",
        children: [
          {
            path: "list",
            component: LengthProductionListComponent
          },

          {
            path: 'edit',
            component: LengthProductionEditComponent
          },
          {
            path: "bulk-upload",
            component: LengthProductionUploadComponent
          },

        ]
      },
      {
        path: "profile",
        children: [
          {
            path: "list",
            component: ProfileListComponent
          },

          {
            path: 'edit',
            component: ProfileEditComponent
          },
          {
            path: "bulk-upload",
            component: ProfileUploadComponent
          },

        ]
      },
      {
        path: "profile-lberia-italy",
        children: [
          {
            path: "list",
            component: ProfileLberiaItalyListComponent
          },

          {
            path: 'edit',
            component: ProfileLberiaItalyEditComponent
          },
          {
            path: "bulk-upload",
            component: ProfileLberiaItalyUploadComponent
          },

        ]
      },
      {
        path: "transport-mode",
        children: [
          {
            path: "list",
            component: TransportModeListComponent
          },

          {
            path: 'edit',
            component: TransportModeEditComponent
          },
          {
            path: "bulk-upload",
            component: TransportModeUploadComponent
          },

        ]
      },
      {
        path: "incoterm-exceptions",
        children: [
          {
            path: "list",
            component: IncotermExceptionsListComponent
          },

          {
            path: 'edit',
            component: IncotermExceptionsEditComponent
          },
          {
            path: "bulk-upload",
            component: IncotermExceptionsUploadComponent
          },

        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmbMiniBarRoutingModule { }
