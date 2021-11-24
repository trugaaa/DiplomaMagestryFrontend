import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {UsersPageComponent} from "./users-page.component";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ToolbarComponentModule} from "../../components/toolbar/toolbar.component.module";
import {UserComponentModule} from "../../components/user/user.component.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: UsersPageComponent}]),
    ToolbarComponentModule,
    UserComponentModule,
    MatTableModule
  ]
})
export class UsersPageModule {
}
