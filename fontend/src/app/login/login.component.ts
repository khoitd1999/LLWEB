import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser, User } from '../share/module/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  re_password: any;
  user: IUser;

  constructor(
    private toastr: ToastrService,
    private loginService: LoginService,
    private route: Router
  ) { }

  ngOnInit() {
    this.isLogin = true;
    this.re_password = '';
    this.user = new User('', '', 1);
    this.user.role = 1;
  }

  register() {
    this.isLogin = false;
    this.re_password = '';
    this.user = new User('', '', 1);
    this.user.role = 1;
  }

  backToLogin() {
    this.isLogin = true;
    this.re_password = '';
    this.user = new User('', '', 1);
    this.user.role = 1;
  }

  createAccount() {
    if (!this.checkErr()) {
      this.loginService.createAccount(this.user).subscribe(res => {
        if (res.body) {
          if (res.body.message) {
            this.toastr.error(res.body.message, 'Error');
          } else {
            this.toastr.success('Tạo tài khoản thành công', 'Success');
            sessionStorage.setItem('user', JSON.stringify(res.body));
            this.route.navigate(['']);
          }
        } else {
          this.toastr.error('Tạo tài khoản thất bại', 'Error');
        }
      });
    }
  }

  checkErr() {
    if (this.isLogin) {
      if (this.user.username === '' || this.user.password === '') {
        this.toastr.error('Nhập đầy đủ các trường bắt buộc', 'Error');
        return true;
      }
    } else {
      if (this.user.username === '' || this.user.password === '' || this.re_password === '') {
        this.toastr.error('Nhập đầy đủ các trường bắt buộc', 'Error');
        return true;
      } else if (this.user.password !== this.re_password) {
        this.toastr.error('Mật khẩu nhập lại sai', 'Error');
      }
    }
    return false;
  }

  login() {
    if (!this.checkErr()) {
      this.loginService.login(this.user).subscribe(res => {
        if (res.body) {
          if (res.body.message) {
            this.toastr.error(res.body.message, 'Error');
          } else {
            this.toastr.success('Đăng nhập thành công', 'Success');
            sessionStorage.setItem('user', JSON.stringify(res.body));
            this.route.navigate(['']);
          }
        }
      });
    }
  }
}
