import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {SubjectComponentModule} from "../../components/subject/subject.component.module";
import {LessonComponentModule} from "../../components/lesson/lesson.component.module";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {SubjectCreationDialogModule} from "../../dialogs/subject-creation/subject-creation-dialog.module";
import {LessonCreationDialogModule} from "../../dialogs/lesson-creation/lesson-creation-dialog.module";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: MainPageComponent}]),
    SubjectComponentModule,
    LessonComponentModule,
    SubjectCreationDialogModule,
    LessonCreationDialogModule
  ]
})
export class MainPageModule {
}
