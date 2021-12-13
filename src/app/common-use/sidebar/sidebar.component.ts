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
  constructor(private router: Router) {
    this.navbarItem = this.navLink
    // if (this.user === 'admin') {
    //   this.router.navigate(['/management/offer-status'])
    //   this.navbarItem = this.navLink.filter((x: any) => x.type === 'admin')
    // } else {
    //   this.navbarItem = this.navLink.filter((x: any) => x.type === 'user')
    // }
    console.log(this.navbarItem, "Nav Item")
  }

  ngOnInit(): void {
    this.version = "1";
    console.log(this.navbarItem)
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  openNav() {
    this.isOpen = false
  }
  offerClicked(): void {
    let doc: any = document.getElementById('offer-link')
    doc.click();
  }

}

