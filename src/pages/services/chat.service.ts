import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://127.0.0.1:8080';

@Injectable()
export class ChatService {
  public messages: Subject<String>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<String>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): String => {
        const data = response.data;
        return data;
      });
  }
}
