import {Input, NgModule} from "@angular/core";
import {SubjectComponent} from "./subject.component";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@NgModule({
    exports: [
        SubjectComponent
    ],
  imports: [
    MatCardModule,
    CommonModule
  ],
    declarations: [SubjectComponent]
})
export class SubjectComponentModule {
  @Input() name?: string;
  @Input() description?: string;
}
