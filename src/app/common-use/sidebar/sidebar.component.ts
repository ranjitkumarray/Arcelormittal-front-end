import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NavItems } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showFiller: boolean = false
  collapsed: boolean = false;
  isOpen: boolean = false;
  version: string = '';
  // loadingRouteConfig: boolean = false;
  user: any = 'user'
  navbarItem: any = []

  details:any =localStorage.getItem(("arc-userDetails"))
  userDeatails =JSON.parse(this.details)

  constructor(private router: Router) {
    
let localData: any = localStorage.getItem('arc-userDetails')


    this.navbarItem = JSON.parse(localData).sidebar_json
  
    console.log(this.navbarItem, "Nav Item")
  }

  ngOnInit(): void {
    this.version = "1";
    
    // console.log(this.navbarItem)
  
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    console.log("toggle")
  }
  openNav() {
    this.isOpen = false
    console.log("openNav")
  }
  offerClicked(): void {
    let doc: any = document.getElementById('offer-link')
    console.log(doc)
    doc.click();
  }

}

