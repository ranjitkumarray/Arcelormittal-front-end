import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLoggedIn: boolean = localStorage.getItem('user') ? true : false;

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('user') ? true : false;
  }
}
