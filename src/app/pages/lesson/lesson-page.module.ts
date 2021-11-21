import {NgModule} from "@angular/core";
import {LessonPageComponent} from "./lesson-page.component";
import {RouterModule} from "@angular/router";
import {TaskComponentModule} from "../../components/task/task.component.module";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ToolbarComponentModule} from "../../components/toolbar/toolbar.component.module";

@NgModule(
  {
    declarations: [LessonPageComponent],
      imports: [
          MatSharedModule,
          RouterModule.forChild([{path: '**', component: LessonPageComponent}]),
          TaskComponentModule,
          ToolbarComponentModule
      ]
  }
)
export class LessonPageModule {

}
