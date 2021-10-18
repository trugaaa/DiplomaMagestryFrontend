import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {TaskComponent} from "./task.component";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  exports: [
    TaskComponent
  ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CommonModule,
        MatFormFieldModule
    ],
  declarations: [TaskComponent]
})
export class TaskComponentModule {

}
