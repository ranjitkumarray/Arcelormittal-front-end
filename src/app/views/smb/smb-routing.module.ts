import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { AuthGuardService } from 'src/app/services/authGard.service';
import { BasePriceAdditionListComponent } from './base-price/base-price-addition-list/base-price-addition-list.component';
import { BulkUploadBasePriceAdditionComponent } from './base-price/bulk-upload-base-price-addition/bulk-upload-base-price-addition.component';
import { DeliveryMillListComponent } from './delivery-mill-list/delivery-mill-list.component';
import { ExtraCertificateListComponent } from './extra-certificate-list/extra-certificate-list.component';
import { FreightParityListComponent } from './freight-parity-list/freight-parity-list.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { IncotermExceptionsListComponent } from './incoterm-exceptions/incoterm-exceptions-list/incoterm-exceptions-list.component';
import { LengthLogisticListComponent } from './length-logistic-list/length-logistic-list.component';
import { LengthProductionListComponent } from './length-production-list/length-production-list.component';
import { ProfileLberiaItalyListComponent } from './profile-lberia-italy-list/profile-lberia-italy-list.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { HistoryModalComponent } from './smb-modal/history-modal/history-modal.component';
import { UploadValidateModalComponent } from './smb-modal/upload-validate-modal/upload-validate-modal.component';
import { TransportModeListComponent } from './transport-mode-list/transport-mode-list.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: "base-price",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: BasePriceAdditionListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: BulkUploadBasePriceAdditionComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "delivery-mill",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: DeliveryMillListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "extra-certificate",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: ExtraCertificateListComponent,
                  canActivate: [AuthGuardService]
                },

                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "freight-parity",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: FreightParityListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "grade",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: GradeListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "length-logistic",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: LengthLogisticListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "length-production",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: LengthProductionListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "profile",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: ProfileListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "profile-lberia-italy",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: ProfileLberiaItalyListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "transport-mode",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: TransportModeListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      },
      {
        path: "incoterm-exceptions",
        children:
          [
            ...['', 'mini-bar'].map(path => ({
              path,
              children: [
                {
                  path: "list",
                  component: IncotermExceptionsListComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "bulk-upload",
                  component: UploadValidateModalComponent,
                  canActivate: [AuthGuardService]
                },
                {
                  path: "history",
                  component: HistoryModalComponent,
                  canActivate: [AuthGuardService]
                }
              ]
            }))
          ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmbRoutingModule { }
