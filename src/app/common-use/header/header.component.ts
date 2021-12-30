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
  json:any;
  f_Letter:any

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.UserDetails = localStorage.getItem(("userDetails"))

    this.json = JSON.parse(this.UserDetails)
    console.log(this.json.user)
    this.f_Letter=this.json.user.user_name
    
    
  }

  logOut(){
    this.router.navigate(['/auth/login'])
    localStorage.clear();
    
    // console.log(this.lgn.Users)
  }
  
  profile(){
    
    console.log(this.f_Letter)
    
  }
  
  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
  }
}
