import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { ShareModule } from "src/app/share/share.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations:[
    NavbarComponent
  ],
  imports:[
    MatToolbarModule,
    ShareModule
  ],
  exports:[
    NavbarComponent
  ],
  providers:[]
})

export class NavbarModule { }
