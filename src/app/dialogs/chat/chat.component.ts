import {ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {AppCookieService} from "../../services/app-cookie.service";
import {ChatMessage} from "../../models/chat";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import * as signalR from "@microsoft/signalr";
import {UserService, UserType} from "../../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: "chat-dialog",
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {
  env = environment;

  chatMessages: ChatMessage[];
  currentUsername: string;
  taskInfoId: string;
  communicatorUsername: string;

  socket;
  inputtedMessage: string = "";

  userTypes = UserType;

  constructor(private userService: UserService,
              public cookieService: AppCookieService,
              private changeDetection: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.communicatorUsername = data.selectedUsername;
    this.taskInfoId = data.taskInfoId;
    this.currentUsername = cookieService.getCookie("username");
    this.chatMessages = data.messagesHistory;

    if (userService.getCurrentUserType() === this.userTypes.student) {
      this.communicatorUsername = this.currentUsername;
    }

    this.socket = new signalR.HubConnectionBuilder()
      .withUrl(this.env.url + "/comment",
        {accessTokenFactory: () => cookieService.getCookie("token")})
      .configureLogging(signalR.LogLevel.Debug)
      .build();

    this.socket.on("ReceiveMessage", (sender, message) => {
      this.chatMessages.push({sender: sender, message: message})
      changeDetection.detectChanges();
    })
  }

  ngOnInit() {
    this.socket.start().then(
      () => {
        this.socket.invoke("Subscribe", parseInt(this.taskInfoId), this.communicatorUsername);
      }
    ).catch(err => console.log(err));

    window.document.getElementById("chat")!.scrollTop
      = window.document.getElementById("chat")!.scrollHeight;
  }

  onSent() {
    this.socket.invoke("Send", this.taskInfoId, this.communicatorUsername, this.inputtedMessage);
    this.inputtedMessage = ""
  }

  ngOnDestroy() {
    this.socket.stop();
  }
}
