import { Component, OnInit } from '@angular/core';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-group-management',
  templateUrl: './user-group-management.component.html',
  styleUrls: ['./user-group-management.component.scss']
})
export class UserGroupManagementComponent implements OnInit {
  loadingRouteConfig: boolean = false;
  constructor(
    private apiString:CitGlobalConstantService,
    private apiMethod:ApiService
  ) {
    
   }

  ngOnInit(): void {
  }

}
