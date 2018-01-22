import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'page-contacts',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log('Response from websocket: ' + msg);
    });
    this.sendMsg("xavi", "hola, que tal", "paula");
  }

  sendMsg(from, message, to) {
    console.log('new message from client to websocket: ', message);
    this.chatService.messages.next(from + ":" + message + ":" + to);
  }

}
