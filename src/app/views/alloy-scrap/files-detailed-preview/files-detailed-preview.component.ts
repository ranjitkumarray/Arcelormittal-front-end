import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-files-detailed-preview',
  templateUrl: './files-detailed-preview.component.html',
  styleUrls: ['./files-detailed-preview.component.scss']
})
export class FilesDetailedPreviewComponent implements OnInit {
  fileDetails: any;
  loadingRouteConfig: boolean = false

  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
  ) { }

  ngOnInit(): void {
    this.Route.paramMap.subscribe(params => {
      this.fileDetails = params.get('fileDetails')
    })
    if (this.fileDetails) {
      console.log(atob(this.fileDetails))
      this.getDetails()
    }
  }
  getDetails() {
    let requiredData = atob(this.fileDetails).split('&')
    let body = {
      filename: requiredData[0],
      condition_type: requiredData[1],
      Batch_ID: requiredData[2]
    }
    this.loadingRouteConfig = true
    this.apiMethod.get_request_Param(this.apiString.get_history_file_data, body).subscribe(result => {
      console.log(result)
      this.loadingRouteConfig = false
      let tablename = Object.keys(result)
      console.log(tablename)
      this.apiMethod.popupMessage('success')
    }, error => {
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error')
    })
  }
}
