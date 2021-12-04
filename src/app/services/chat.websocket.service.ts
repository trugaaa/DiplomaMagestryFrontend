import {webSocket, WebSocketSubject} from "rxjs/webSocket";

export class ChatWebsocketService {
  private socket: WebSocketSubject<unknown>;
  public messages;

  constructor() {
    this.socket = webSocket("https://localhost:5001/comment");
    this.messages = this.socket.asObservable();
  }

  openConnection() {
    this.socket.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  public sendMessage(msg: any) {
    this.socket.next(msg);
  }

  public closeConnection() {
    this.socket.unsubscribe();
  }
}
