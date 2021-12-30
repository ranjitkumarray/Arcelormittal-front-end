import { JsonpClientBackend } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLoggedIn: boolean = localStorage.getItem('user') ? true : false;

  UserDetails:any;
  f_name:any

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.UserDetails = localStorage.getItem(("userDetails"))
    this.f_name = JSON.parse(this.UserDetails).user.user_name[0]
 }

  logOut(){
    this.router.navigate(['/auth/login'])
    localStorage.clear();
    
    // console.log(this.lgn.Users)
  }
  
  profile(){
    
  }
  
  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
  }
}
