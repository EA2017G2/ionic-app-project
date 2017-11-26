import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlaystartedPage} from "../playstarted/playstarted";

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {

  constructor(public navCtrl: NavController) {

  }
onClick2(){
  this.navCtrl.setRoot(PlaystartedPage);
}

}
