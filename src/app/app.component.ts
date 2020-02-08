import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restaurent';
  public href1 ;
  constructor(location: Location, private  router: Router) { }
  
  ngOnInit() {
    this.href1 = this.router.url;
    console.log(this.href1);
  }
}
