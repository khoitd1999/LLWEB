import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TraCuuTuModule } from '../tra-cuu-tu/tra-cuu-tu.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    HttpClientModule
  ]
})

export class ShareModule { }
