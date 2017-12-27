import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../login/login.component';
import {RegisterPage} from "../register/register.component";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.setRoot(LoginComponent);
  }


  onClick2(){
    this.navCtrl.setRoot(RegisterPage);
  }
  /*onClick33(){
    this.navCtrl.setRoot(ForgetPasswordPage);
  }
*/

}
