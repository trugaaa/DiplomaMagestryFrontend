import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {TaskCreationDialogComponent} from "./task-creation-dialog.component";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "../../pages/main/main-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TaskCreationDialogComponent],
  exports: [
    TaskCreationDialogComponent
  ],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: MainPageComponent}]),
    ReactiveFormsModule
  ]
})
export class TaskCreationDialogModule {
}
