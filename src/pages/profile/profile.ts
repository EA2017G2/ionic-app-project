import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import {AccountPage} from "../account/account";
import {HelpPage} from "../help/help";
import {UserService} from "../services/user.service";
import {User } from '../user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: User;
  distance: number = 0;
  age: any = { lower: 18, upper: 90 };
  showme: string = "f";

  constructor(public navCtrl: NavController, private userService: UserService) {
  this.profile();
  }
  profile(){
    this.userService.profile().subscribe(res => {
      this.user = res[0];
      //  this.user = res;
      console.log('Welcome to :', this.user);
    }, error => {
      console.log('Error al mostrar Perfil de User:' + error);
    });
  }
  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }


  onClick1(){
    this.navCtrl.setRoot(AccountPage);
  }


  onClick2(){
    this.navCtrl.setRoot(HelpPage);
  }


}
