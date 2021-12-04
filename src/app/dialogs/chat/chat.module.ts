import {NgModule} from "@angular/core";
import {MatSharedModule} from "../../shared/mat.shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ChatComponent} from "./chat.component";
import {MessageChatComponentModule} from "../../components/message.chat/message.chat.module";

@NgModule({
  declarations: [ChatComponent],
  exports: [
    ChatComponent
  ],
    imports: [
        MatSharedModule,
        ReactiveFormsModule,
        MessageChatComponentModule
    ]
})
export class ChatModule {
}
