import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItems } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navLink: any = NavItems
  showFiller: boolean = false
  collapsed: boolean = false;
  isOpen: boolean = false;
  version: string = '';
  user: any = 'user'
  navbarItem: any = []
  test = true

  details:any =localStorage.getItem(("arc-userDetails"))
  userDeatails =JSON.parse(this.details)

  constructor(private router: Router) {
    this.navbarItem = this.navLink
  
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

