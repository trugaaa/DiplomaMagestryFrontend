import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {LessonCreationDialogComponent} from "./lesson-creation-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LessonCreationDialogComponent],
  exports: [
    LessonCreationDialogComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class LessonCreationDialogModule {
}
