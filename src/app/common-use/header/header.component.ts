import { JsonpClientBackend } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  UserDetails:any;
  json:any;
  f_Letter:any

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.UserDetails = localStorage.getItem(("userDetails"))
    this.json = JSON.parse(this.UserDetails)
    this.f_Letter = this.json.name[0]
  }

  logOut(){
    this.router.navigate(['/auth/login'])
    localStorage.clear();
    // console.log(this.lgn.Users)
  }
  
  profile(){
    
    console.log(this.f_Letter)
    
  }
  
}
