import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewLoginPage} from "../newlogin/newlogin";

@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html'
})
export class ForgetPasswordPage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.setRoot(NewLoginPage);
  }
}


