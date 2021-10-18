import {NgModule} from "@angular/core";
import {LessonPageComponent} from "./lesson-page.component";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {TaskComponentModule} from "../../components/task/task.component.module";
import {CommonModule} from "@angular/common";

@NgModule(
  {
    declarations: [LessonPageComponent],
    imports: [
      MatCardModule,
      RouterModule.forChild([{path: '**', component: LessonPageComponent}]),
      TaskComponentModule,
      CommonModule,
    ]
  }
)
export class LessonPageModule {

}
