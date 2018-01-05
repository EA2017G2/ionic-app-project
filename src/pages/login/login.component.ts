import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';
import {PlayPage} from '../play/play';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register.component';
import { ForgetPasswordPage} from '../forgetpassword/forgetpassword';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;
  showUser: boolean = false;

  constructor ( public navCtrl: NavController, private userService: UserService, private facebook: Facebook) {
    console.log('Hello user');
    this.user = new User();
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.userService.login(this.user).subscribe( res => {
      console.log('Res: ' + res.token);
      localStorage.setItem('token', res.token);
     // this.navCtrl.setRoot(TabsPage);
      this.navCtrl.setRoot(TabsPage);
    }, error => {
      console.log('Ha habido un error en el login:' + error);
    });

  }
  onClick2(){
    this.navCtrl.setRoot(PlayPage);
  }
  regisClick(){
    this.navCtrl.push(RegisterPage);

  }
  passClick(){
    this.navCtrl.push(ForgetPasswordPage);

  }

  loginFacebook(){
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


