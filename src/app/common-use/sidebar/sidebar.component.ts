import { ThisReceiver, ThrowStmt } from '@angular/compiler';
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
  myNav:any = [];

  username:any = 'sayeesh'
  main_bar = 'this.router.url'
  sub_bar = '/smb/base-price/list'
  mainItem : any = []
  subItem  : any  = []
  minItem  : any  = []
  arr = ['Management','SMB']
  ans :any
  

  details:any =localStorage.getItem(("arc-userDetails"))
  userDeatails =JSON.parse(this.details)
  
  constructor(private router: Router) {
    console.log(this.arr[1])
    // this.ans = this.arr.filter((x:any)=>x)
      this.navbarItem = this.navLink
      this.navbarItem = this.navLink.filter((x: any) => x.name ==  this.arr[0])
      
    
  //  this.navbarItem = this.navLink.filter((x : any)=> x )
  
   if(this.username == ''){
    this.navbarItem = this.navLink.filter((x: any) => x) 
     this.navLink.filter((x: any) => x.name == 'SMB')
   }
   if(this.main_bar == '/management/offer-status'){
      this.navbarItem = this.navLink.filter((x: any) => x.name == 'Management')
   }
   if(this.main_bar == '/alloy-scrap/upload'){
      this.navbarItem = this.navLink.filter((x: any) => x.name == 'Alloy & Scrap')
      // console.log(this.navbarItem[0].children[0].url == this.main_bar)
   }
   if(this.main_bar == '/smb/base-price/list'){
      this.navbarItem = this.navLink.filter((x: any) => x.name == 'SMB')
   }
   if(this.main_bar == '/smb/base-price/mini-bar/list'){
      this.navbarItem = this.navLink.filter((x: any) => x.name == 'SMB-miniBar')
   }
   if(this.main_bar == '/management/order-status'){
      this.navbarItem = this.navLink.filter((x: any) => x.name == 'My Tasks')
   }
    
    // this.myNav = this.navLink.filter((x : any)=> x)
    // if(this.myNav[1].name == 'Alloy & Scrap'){
    //   console.log('suu')
    //   this.subItem = this.myNav.filter((x: any) => x)
    //   console.log(this.subItem)
    // }
    // console.log(this.myNav[1].tag)
    // this.myNav = this.navLink.filter((x : any)=> x.name )
    // console.log(this.myNav[1])
    //  this.myNav = this.navLink.filter((x : any)=> x.name)
    //  console.log(this.myNav[2].children[0].children[0].url)


    // this.navbarItem = this.navLink
    // if (this.userDeatails.usertype === 'Admin') {
    //   //  this.router.navigate(['/alloy-scrap/upload/'])
    //   this.navbarItem = this.navLink.filter((x: any) => x.type === 'admin' || x.type === 'user')
      
    // } else {
    //   this.router.navigate(['/management/offer-status/'])

      // this.navbarItem = this.navLink.filter((x: any) => x.name)
    // }
    // console.log(this.navbarItem, "Nav Item")
    // console.log(this.userDeatails.usertype)
  }

  ngOnInit(): void {
    this.version = "1";
    // console.log(this.navbarItem)
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

