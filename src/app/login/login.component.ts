import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginAdmin } from '../login/login-admin';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  href1: string;
  LoginForm: FormGroup;
  logindata: any;
  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.href1 = this.router.url;
    //console.log(this.href1);
    this.LoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'AppId': new FormControl("300002"),
    });
  }


  onSubmit() {
    let logindata = this.LoginForm.value;
    console.log(logindata);
    this.login(logindata);
  }
  login(loginAdmin: LoginAdmin) {
    this.loginService.adminLogin(loginAdmin).subscribe((employee) => {
      var succ = employee;
      console.log(succ);
      if (succ.status == "success") {
        this.router.navigate(['/Dashboard']);
        sessionStorage.setItem('admin', succ.userName);
      }
      else {
        alert("not valid credentials");
      }
    });
  }

}
