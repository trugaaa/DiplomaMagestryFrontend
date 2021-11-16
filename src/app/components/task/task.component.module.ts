import {NgModule} from "@angular/core";
import {TaskComponent} from "./task.component";
import {FormsModule} from "@angular/forms";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  exports: [
    TaskComponent
  ],
  imports: [
    MatSharedModule,
    FormsModule
  ],
  declarations: [TaskComponent]
})
export class TaskComponentModule {
}
