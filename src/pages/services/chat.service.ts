import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://127.0.0.1:8080';

export interface WebSocketMessage {
  msgType: string;
  author: string;
  message: string;
  receiver: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<WebSocketMessage>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<WebSocketMessage>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): WebSocketMessage => {
        const data = JSON.parse(response.data);
        return {
          msgType: data.msgType,
          author: data.author,
          message: data.message,
          receiver: data.receiver
        };
      });
  }
}
