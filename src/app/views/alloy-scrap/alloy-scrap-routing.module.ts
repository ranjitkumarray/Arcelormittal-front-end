import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { AlloyScrapComponent } from './alloy-scrap.component';
import { FilesDetailedPreviewComponent } from './files-detailed-preview/files-detailed-preview.component';
import { HistoryAlloyScrapComponent } from './history-alloy-scrap/history-alloy-scrap.component';
import { UploadAlloyScrapComponent } from './upload-alloy-scrap/upload-alloy-scrap.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'upload',
        component: UploadAlloyScrapComponent
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            component: HistoryAlloyScrapComponent,
          },
          {
            path: "fileDetails/:fileDetails",
            component: FilesDetailedPreviewComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlloyScrapRoutingModule { }
