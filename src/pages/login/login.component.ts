import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';
import {PlayPage} from "../play/play";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;


  constructor ( public navCtrl: NavController, private userService: UserService) {
    console.log('Hello user');
    this.user = new User();
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.userService.login(this.user).subscribe( res => {
      console.log('Res: ' + res.token);
      localStorage.setItem('token', res.token);
      this.navCtrl.setRoot(TabsPage);
    }, error => {
      console.log('Ha habido un error en el login:' + error);
    });

  }
  onClick2(){
    this.navCtrl.setRoot(PlayPage);
  }

}


