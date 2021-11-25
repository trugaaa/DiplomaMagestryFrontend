import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {UserGroupChangeDialogModule} from "../../dialogs/user-group-change/user-group-change-dialog.module";

@NgModule({
  exports: [
    UserComponent
  ],
  imports: [
    MatSharedModule,
    UserGroupChangeDialogModule
  ],
  declarations: [UserComponent]
})
export class UserComponentModule {
}
