import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {AppCookieService} from "../../services/app-cookie.service";
import {ChatMessage} from "../../models/chat";
import {ChatWebsocketService} from "../../services/chat.websocket.service";

@Component({
  selector: "chat-dialog",
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {
  chatMessages: ChatMessage[];
  currentUsername: string;

  constructor(public cookieService: AppCookieService,
              private changeDetection: ChangeDetectorRef,
 //             private websocketService: ChatWebsocketService
  ) {
    this.chatMessages = [];
    this.currentUsername = cookieService.getCookie("username");

    console.log(cookieService.getCookie("token"))
    console.log(cookieService.getCookie("username"))
    console.log(this.chatMessages);
  }

  ngOnInit() {
 //   this.websocketService.openConnection();
  }

  ngOnDestroy() {
 //   this.websocketService.closeConnection();
  }
}
