import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {SubjectCreationDialogComponent} from "./subject-creation-dialog.component";

@NgModule({
  declarations: [SubjectCreationDialogComponent],
  exports: [
    SubjectCreationDialogComponent
  ],
  imports: [
    MatSharedModule
  ]
})
export class SubjectCreationDialogModule {
}
