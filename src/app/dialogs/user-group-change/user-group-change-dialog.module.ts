import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {UserGroupChangeDialogComponent} from "./user-group-change-dialog.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {UsersPageComponent} from "../../pages/users/users-page.component";

@NgModule({
  declarations: [UserGroupChangeDialogComponent],
  exports: [
    UserGroupChangeDialogComponent
  ],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: UsersPageComponent}]),
    ReactiveFormsModule
  ]
})
export class UserGroupChangeDialogModule {
}
