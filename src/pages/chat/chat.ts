import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChatService, WebSocketMessage} from "../services/chat.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'page-contacts',
  templateUrl: 'chat.html'
})
export class ChatPage {
  msgContent: string;
  conversations: any[] = [];
  myID: string = "";


  constructor(public navCtrl: NavController, public chatService: ChatService, private userService: UserService) {
    chatService.messages.subscribe(msg => {
      if(this.myID === "") {
        this.userService.profile().subscribe(res => {
          this.myID = res[0]._id;
          this.processMsg(msg);
        }, error => {
          console.log('Error al mostrar Perfil de User:' + error);
        });
      } else {
        this.processMsg(msg);
      }
    });
  }

  processMsg(msg) {
    if (msg.msgType === "0") {
      this.sendMsg("0", this.myID, "", this.myID);
    } else if (msg.msgType !== "0") {
      this.saveNew("../../assets/imgs/girl4.jpg", "Ana", msg.message, false, "left");
    }
  }

  sendMsg(msgType, from, message, to) {
    console.log('new message from client to websocket: ', message);
    let socketMsg = {msgType: msgType, author: from, message: message, receiver: to};
    this.chatService.messages.next(socketMsg);
  }

  onSendClick() {
    this.sendMsg("1", this.myID, this.msgContent, "5a6485fc0dbf8b5a1855bbc6");
    this.saveNew("../../assets/imgs/rusa.jpg", "Laura", this.msgContent, true, "right");
  }

  // Saving function
  saveNew(img: string, name: string, message: string, customPosition: boolean, customAlign: string): void {
    this.conversations.push({
      img: img,
      name: name,
      message: message,
      customPosition: customPosition,
      customAlign: customAlign
    });
    this.msgContent = "";
  }
}
