import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {UserGroupChangeDialogComponent} from "./user-group-change-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserGroupChangeDialogComponent],
  exports: [
    UserGroupChangeDialogComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class UserGroupChangeDialogModule {
}
