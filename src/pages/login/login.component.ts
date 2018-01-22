import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';
import {PlayPage} from '../play/play';
import { ProfilePage } from '../profile/profile';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register.component';
import { ForgetPasswordPage} from '../forgetpassword/forgetpassword';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;
  mess: string;
  showUser: boolean = false;
  // private headResponse = new HttpResponse({'Content-Type': 'application/json'});


  constructor ( public navCtrl: NavController, private userService: UserService, private facebook: Facebook, private alertCtrl: AlertController) {
    console.log('Hello user');
    this.user = new User();
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.userService.login(this.user).subscribe( res => {
      console.log('Res: ' + res.token);
      localStorage.setItem('token', res.token);
     // this.navCtrl.setRoot(TabsPage)
      this.navCtrl.setRoot(TabsPage);


    }, (err: HttpErrorResponse ) => {
      /*if(err.error instanceof Error){
        console.error('An error occurred', err.error.message); // for demo purposes only

       // console.log('Ha habido un error en el login:' + error.error.message);
      } else {
        console.log('Backend:', err.error);
        console.log('Backend:', err.message);
      }*/
      let alert = this.alertCtrl.create({
        title: 'Login failed.Please enter the correct credentials!'
      });
      alert.present();
    console.log('Ha habido un error en el login:' + err);
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


