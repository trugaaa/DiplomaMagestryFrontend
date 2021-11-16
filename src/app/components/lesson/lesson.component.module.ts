import {NgModule} from "@angular/core";
import {LessonComponent} from "./lesson.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  exports: [
    LessonComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSharedModule
  ],
  declarations: [LessonComponent]
})
export class LessonComponentModule {

}
