import {NgModule} from "@angular/core";
import {ToolbarComponent} from "./toolbar.component";
import {FormsModule} from "@angular/forms";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  exports: [
    ToolbarComponent
  ],
  imports: [
    MatSharedModule,
    FormsModule
  ],
  declarations: [ToolbarComponent]
})
export class ToolbarComponentModule {
}
