import {Input, NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {SubjectCreationDialogComponent} from "./subject.creation.dialog.component";

@NgModule({
  exports: [
    SubjectCreationDialogComponent
  ],
  imports: [
    MatCardModule,
    CommonModule
  ],
  declarations: [SubjectCreationDialogComponent]
})
export class SubjectCreationDialogModule {
}
