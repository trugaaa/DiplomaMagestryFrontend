import {NgModule} from "@angular/core";
import {LessonPageComponent} from "./lesson-page.component";
import {RouterModule} from "@angular/router";
import {TaskComponentModule} from "../../components/task/task.component.module";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ToolbarComponentModule} from "../../components/toolbar/toolbar.component.module";
import {LessonAssignUserDialogModule} from "../../dialogs/lesson-assign-user/lesson-assign-user-dialog.module";
import {ChatModule} from "../../dialogs/chat/chat.module";

@NgModule(
  {
    declarations: [LessonPageComponent],
    imports: [
      MatSharedModule,
      RouterModule.forChild([{path: '**', component: LessonPageComponent}]),
      TaskComponentModule,
      ToolbarComponentModule,
      LessonAssignUserDialogModule,
      ChatModule
    ]
  }
)
export class LessonPageModule {

}
