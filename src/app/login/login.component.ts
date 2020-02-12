import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  href1: string;
  LoginForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.href1 = this.router.url;
    //console.log(this.href1);
    this.LoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    });
  }


  onSubmit() {
    console.log(this.LoginForm.value);
  }
}
