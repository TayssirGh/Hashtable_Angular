import {NgModule} from "@angular/core";
import {PresentationComponent} from "./presentation.component";
import {PresentationRoutingModule} from "./presentation-routing.module";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {HashtableDrawComponent} from "./view/HashtableDrawComponent";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@NgModule({
  imports: [
    PresentationRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    NgIf
  ],
  exports: [
    PresentationComponent
  ],

  declarations: [PresentationComponent,
  HashtableDrawComponent]
})
export class PresentationModule{}
