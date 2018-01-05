import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";

@Component({
  selector: 'page-pictures',
  templateUrl: 'pictures.html'
})
export class PicturesPage {

  constructor(public navCtrl: NavController) {

  }
  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }
}

