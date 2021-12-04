import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {UserGroupChangeDialogModule} from "../../dialogs/user-group-change/user-group-change-dialog.module";
import {MessageChatComponent} from "./message.chat.component";

@NgModule({
  exports: [
    MessageChatComponent
  ],
  imports: [
    MatSharedModule,
    UserGroupChangeDialogModule
  ],
  declarations: [MessageChatComponent]
})
export class MessageChatComponentModule {
}
