import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";


@Component({
  selector: 'page-newlogin',
  templateUrl: 'newlogin.html'
})
export class NewLoginPage {

  constructor(public navCtrl: NavController) {

  }

  onClick1(){
    this.navCtrl.setRoot(PlayPage);
  }

  onClick2(){
    this.navCtrl.setRoot(PlayPage);
  }


}
