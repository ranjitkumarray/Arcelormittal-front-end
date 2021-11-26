import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  loadingRouteConfig: boolean = false;
  groupAccess:any;
  filterForm:any;
  selected :any;
  condition=true
  value = 'Clear me';

  //login
  output(output:any){
    console.log(output)
  }

  //User-management
  del(){
    delete(this.selected)
    
  }
  resultdata = [
    {groupAccess:'aaa'},
    {groupAccess:'bbb'},
    {groupAccess:'ccc'}

  ];
  
  constructor( ) {}

    check(){
      this.condition=true;
    }

  ngOnInit(): void {
    
  }

}
