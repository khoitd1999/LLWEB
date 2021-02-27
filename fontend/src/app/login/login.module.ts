import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loginRouter } from './login.route';
import { LoginComponent } from './login.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRouter),
    ShareModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
