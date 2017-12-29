import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import { Facebook } from '@ionic-native/facebook';
import { UserService} from '../services/user.service';
import {User} from '../../../../ionic-app-project/src/pages/user';
@Component({
  selector: 'page-register',
  templateUrl: 'register.component.html'
})
export class RegisterPage {
  user: User;
  showUser: boolean = false;

  constructor(public navCtrl: NavController, private userService: UserService, private facebook: Facebook) {

  }

  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }



  signUpFacebook(){
    this.facebook.login(['public_profile', 'email'])
      .then(rta => {
        console.log(rta.status);
        if(rta.status == 'connected'){
          this.getInfo();
        };
      })
      .catch(error =>{
        console.error( error );
      });
  }

  getInfo(){
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email'])
      .then(data=>{
        console.log(data);
        this.showUser = true;
        this.user = data;
      })
      .catch(error =>{
        console.error( error );
      });
  }
}

