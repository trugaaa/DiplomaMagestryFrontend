import {NgModule} from "@angular/core";
import {GroupComponent} from "./group.component";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {UserGroupChangeDialogModule} from "../../dialogs/user-group-change/user-group-change-dialog.module";

@NgModule({
  exports: [
    GroupComponent
  ],
  imports: [
    MatSharedModule,
    UserGroupChangeDialogModule
  ],
  declarations: [GroupComponent]
})
export class GroupComponentModule {
}
