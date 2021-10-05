import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {MainPageComponent} from "./main-page.component";
import {SubjectComponentModule} from "../../components/subject/subject.component.module";
import {SharedModule} from "../../shared/shared.module";
import {LessonComponentModule} from "../../components/lesson/lesson.component.module";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: MainPageComponent}]),
    SubjectComponentModule,
    SharedModule,
    LessonComponentModule
  ]
})
export class MainPageModule {
}
