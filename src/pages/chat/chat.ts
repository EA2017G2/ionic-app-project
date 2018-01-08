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
  }

  private message = {
    author: 'tutorialedge',
    message: 'this is a test message'
  };

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }

}
