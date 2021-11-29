import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {SubjectCreationDialogComponent} from "./subject-creation-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [SubjectCreationDialogComponent],
  exports: [
    SubjectCreationDialogComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class SubjectCreationDialogModule {
}
