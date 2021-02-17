import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  declarations:[
    NavbarComponent
  ],
  imports:[
    MatToolbarModule
  ],
  exports:[
    NavbarComponent
  ],
  providers:[]
})

export class NavbarModule { }
