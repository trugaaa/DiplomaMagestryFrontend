import {NgModule} from "@angular/core";
import {LessonComponent} from "./lesson.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  exports: [
    LessonComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [LessonComponent]
})
export class LessonComponentModule {

}
