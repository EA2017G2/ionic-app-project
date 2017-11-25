import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  response: any;
  token: any;
  mensaje: any;
  user: {
    email,
    password
  };

  constructor (public navCtrl: NavController) {
    console.log('Hello user');
    this.user = {
      'email': '',
      'password': ''
    };
  }
  onSubmit() {
    this.navCtrl.setRoot(TabsPage);
  }

}
