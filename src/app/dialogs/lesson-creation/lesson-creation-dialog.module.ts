import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {LessonCreationDialogComponent} from "./lesson-creation-dialog.component";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "../../pages/main/main-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LessonCreationDialogComponent],
  exports: [
    LessonCreationDialogComponent
  ],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: MainPageComponent}]),
    ReactiveFormsModule
  ]
})
export class LessonCreationDialogModule {
}
