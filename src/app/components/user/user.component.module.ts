import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  exports: [
    UserComponent
  ],
  imports: [
    MatSharedModule
  ],
  declarations: [UserComponent]
})
export class UserComponentModule {

}
