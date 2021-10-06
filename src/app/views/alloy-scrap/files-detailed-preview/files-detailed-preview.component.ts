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
  fileName: any;

  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
  ) { }

  ngOnInit(): void {
    this.Route.paramMap.subscribe(params => {
      this.fileName = params.get('fileName')
    })
    if (this.fileName) {
      console.log(atob(this.fileName))
    }
  }

}
