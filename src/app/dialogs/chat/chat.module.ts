import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ChatComponent} from "./chat.component";

@NgModule({
  declarations: [ChatComponent],
  exports: [
    ChatComponent
  ],
  imports: [
    MatSharedModule,
    ReactiveFormsModule
  ]
})
export class ChatModule {
}
