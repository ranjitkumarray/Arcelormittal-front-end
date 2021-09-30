import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller:boolean=false
  collapsed: boolean = false;
  isOpen: boolean = false;
  version: string = '';

  constructor() { }

  ngOnInit(): void {
    this.version = "1";
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  openNav(){
    this.isOpen=false
  }
  offerClicked(): void {
    let doc: any = document.getElementById('offer-link')
    doc.click();
  }

}

