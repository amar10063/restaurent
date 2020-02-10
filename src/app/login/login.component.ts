import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  href1: string;

  constructor( private  router: Router) { }

  ngOnInit() {
    this.href1 = this.router.url;
    console.log(this.href1);
  }

}
