import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmbComponent } from './smb.component';

const routes: Routes = [{ path: '', component: SmbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmbRoutingModule { }
