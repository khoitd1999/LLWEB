import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { TraCuuTuComponent } from './tra-cuu-tu.component';
import { traCuuRouter } from './tra-cuu-tu.router';

@NgModule({
  declarations: [
    TraCuuTuComponent
  ],
  imports: [
    RouterModule.forChild(traCuuRouter),
    ShareModule
  ],
  exports: [
    TraCuuTuComponent
  ]
})
export class TraCuuTuModule { }
