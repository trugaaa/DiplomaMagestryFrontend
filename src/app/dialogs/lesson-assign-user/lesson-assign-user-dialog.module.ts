import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LessonAssignUserDialogComponent} from "./lesson-assign-user-dialog.component";

@NgModule({
  declarations: [LessonAssignUserDialogComponent],
  exports: [
    LessonAssignUserDialogComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class LessonAssignUserDialogModule {
}
