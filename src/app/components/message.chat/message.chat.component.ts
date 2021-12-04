import {Component, Input} from "@angular/core";

@Component({
  selector: "msg-chat",
  templateUrl: "message.chat.component.html",
  styleUrls: ["message.chat.component.scss"]
})
export class MessageChatComponent {
  @Input() sender?: string;
  @Input() message?: string;
}
