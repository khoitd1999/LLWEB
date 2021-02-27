import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogin = true;
  }

  register() {
    this.isLogin = false;
  }

  login() {
    this.isLogin = true;
  }
}
