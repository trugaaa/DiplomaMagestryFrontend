import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {GroupsPageComponent} from "./groups-page.component";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ToolbarComponentModule} from "../../components/toolbar/toolbar.component.module";
import {GroupComponentModule} from "../../components/group/group.component.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '', component: GroupsPageComponent}]),
    ToolbarComponentModule,
    GroupComponentModule,
    ReactiveFormsModule
  ]
})
export class GroupsPageModule {
}
