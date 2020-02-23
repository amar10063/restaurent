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
  aa: any;
  Email: any;
  succ: LoginAdmin;
  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.href1 = this.router.url;
    //console.log(this.href1);
    this.LoginForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, Validators.required),
      'Flag': new FormControl("4"),
    });
  }


  onSubmit() {
    const logindata = this.LoginForm.value;
    console.log(logindata);
    this.login(logindata);
  }
  login(loginAdmin: LoginAdmin) {
    this.loginService.adminLogin(loginAdmin).subscribe((employee) => {
      this.succ = employee;
      this.aa = this.succ.dataList;
      console.log(this.aa[0].Email);
      if (this.aa[0].loginStatus === 'Sucess') {
        this.router.navigate(['/Dashboard']);
        sessionStorage.setItem('adminEmail', this.succ.userName);
      } else {
        alert('not valid credentials');
      }
    });
  }

}
