import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { reviewRouter } from './review.router';

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(reviewRouter)
  ]
})
export class ReviewModule { }
