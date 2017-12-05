import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage} from "../chat/chat";

@Component({
  selector: 'app-playstarted',
  templateUrl: './playstarted.html'
})
export class PlaystartedPage {
  constructor(public navCtrl: NavController) {

  }
  doSearch(){
    this.navCtrl.setRoot(ChatPage);
  }
  doReject(){
    this.navCtrl.setRoot(PlaystartedPage);
  }
}
