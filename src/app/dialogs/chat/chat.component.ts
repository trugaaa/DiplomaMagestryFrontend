import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {AppCookieService} from "../../services/app-cookie.service";
import {ChatMessage} from "../../models/chat";

@Component({
  selector: "chat-dialog",
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {
  chatMessages: ChatMessage[];
  currentUsername: string;

  constructor(public cookieService: AppCookieService,
              private changeDetection: ChangeDetectorRef) {
    this.chatMessages = [];
    this.currentUsername = cookieService.getCookie("username");

    console.log(cookieService.getCookie("token"))
    console.log(cookieService.getCookie("username"))
    console.log(this.chatMessages);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //close connection
  }
}
