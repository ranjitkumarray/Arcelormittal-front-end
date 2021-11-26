import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedOption :any;
  printedOption:any;

  options = [
    {name:'sayeesh',value : 1},
    {name : 'vinayak',value : 2}
  ]
  print(){
    this.printedOption=this.selectedOption;
  }

  del(){
    delete(this.selectedOption)
  }

  constructor() { }

  ngOnInit(): void {
  }

  output(output:any){
    console.log(output)
  }

}
