import {Input, NgModule} from "@angular/core";
import {SubjectComponent} from "./subject.component";
import {CommonModule} from "@angular/common";
import {LessonCreationDialogModule} from "../../dialogs/lesson-creation/lesson-creation-dialog.module";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
    exports: [
        SubjectComponent
    ],
  imports: [
    MatSharedModule,
    CommonModule,
    LessonCreationDialogModule,
  ],
    declarations: [SubjectComponent]
})
export class SubjectComponentModule {
  @Input() name?: string;
  @Input() description?: string;
}
