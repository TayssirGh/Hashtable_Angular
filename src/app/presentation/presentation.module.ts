import {NgModule} from "@angular/core";
import {PresentationComponent} from "./presentation.component";
import {PresentationRoutingModule} from "./presentation-routing.module";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";

@NgModule({
  imports: [
    PresentationRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule
  ],
  exports: [
    PresentationComponent
  ],

  declarations: [PresentationComponent]
})
export class PresentationModule{}
