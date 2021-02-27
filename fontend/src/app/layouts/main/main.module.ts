import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginModule } from "src/app/login/login.module";
import { TraCuuTuComponent } from "src/app/tra-cuu-tu/tra-cuu-tu.component";
import { TraCuuTuModule } from "src/app/tra-cuu-tu/tra-cuu-tu.module";
import { FooterModule } from "../footer/footer.module";
import { NavbarModule } from "../navbar/navbar.module";
import { MainComponent } from "./main.component";

@NgModule({
  declarations:[
    MainComponent
  ],
  imports:[
    TraCuuTuModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    LoginModule
  ],
  exports:[
    MainComponent
  ],
  providers:[]
})

export class MainModule { }
