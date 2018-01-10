import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import {PicturesPage} from "../pictures/pictures";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }
  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }
  onClick1(){
    this.navCtrl.setRoot(PicturesPage);
  }
}
