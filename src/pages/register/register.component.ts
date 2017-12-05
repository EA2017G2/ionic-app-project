import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";

@Component({
  selector: 'page-register',
  templateUrl: 'register.component.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }
}

