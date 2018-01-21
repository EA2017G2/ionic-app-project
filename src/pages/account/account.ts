import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import {PicturesPage} from "../pictures/pictures";
import {UserService} from "../services/user.service";
import {User } from '../user';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  user: User;
  constructor(public navCtrl: NavController, private userService: UserService) {
    this.user = new User();
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

  onClick(user: User){
    console.log(user);
    this.userService.updateName(user).subscribe();
  /* if(pass1===pass2) {
      this.userService.settings(username, city, pass1).subscribe(res => {
      });
    }
    else(alert("Contraseñas diferentes"));*/
    this.navCtrl.setRoot(PlayPage);
  }
  onClick2(user: User){
    console.log('click2',user);
    this.userService.updateCity(user).subscribe();
    this.navCtrl.setRoot(PlayPage);
  }
  onClick1(){
    this.navCtrl.setRoot(PicturesPage);
  }
}
