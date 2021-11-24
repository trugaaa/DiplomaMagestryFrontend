import {NgModule} from "@angular/core";
import {LessonComponent} from "./lesson.component";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  exports: [
    LessonComponent
  ],
  imports: [
    MatSharedModule
  ],
  declarations: [LessonComponent]
})
export class LessonComponentModule {

}
