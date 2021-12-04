import {Component} from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {AppCookieService} from "../../services/app-cookie.service";
import {HubConnection} from "@microsoft/signalr";

@Component({
  selector: "chat-dialog",
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent {
  token: string;
  hubConnection: HubConnection;

  constructor(public cookieService: AppCookieService) {
    this.token = cookieService.getCookie("token");
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:5001/comment",
        {accessTokenFactory: () => this.token})
      .build();

  }
}
