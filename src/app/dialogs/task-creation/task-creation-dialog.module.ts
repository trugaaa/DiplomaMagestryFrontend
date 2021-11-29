import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {TaskCreationDialogComponent} from "./task-creation-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TaskCreationDialogComponent],
  exports: [
    TaskCreationDialogComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class TaskCreationDialogModule {
}
