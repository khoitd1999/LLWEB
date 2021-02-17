import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { MainModule } from "./main/main.module";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
    imports:[
      ShareModule,
      MainModule,
      NavbarModule
    ],
    exports:[
      MainModule,
      NavbarModule
    ],
    declarations: [
    ]
})

export class LayoutModule { }
