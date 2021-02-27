import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './share/share.module';
import { LayoutModule } from './layouts/layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ShareModule,
    LayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './tra-cuu-tu/tra-cuu-tu.module#TraCuuTuModule'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
