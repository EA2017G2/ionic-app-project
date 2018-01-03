import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import { Facebook } from '@ionic-native/facebook';
import { UserService} from '../services/user.service';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {TabsPage} from "../tabs/tabs";
import {ProfilePage} from "../profile/profile";
import moment from 'moment';

@Component({
  selector: 'page-register',
  templateUrl: 'register.component.html'
})
export class RegisterPage {
  user: User;
  showUser: boolean = false;
  regisForm: FormGroup;

  sex = [
    'Male', 'Female'];


  constructor(public navCtrl: NavController, private userService: UserService, private facebook: Facebook,private fb: FormBuilder) {
    this.createForm();
  }

  onClick(){
    this.navCtrl.setRoot(PlayPage);
  }
  createForm() {
    this.regisForm = this.fb.group({
      email: ['', Validators.required],
      name : ['', Validators.required ],
      birthday: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  createForm2() {
    this.regisForm = this.fb.group({
      email: [this.user.email],
      name : [this.user.name ],
      birthday: [this.user.birthday],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      sex: [this.user.sex]
    });
  }
  onSubmit() {
    if (this.regisForm.value.password === this.regisForm.value.password2) {
      console.log('!!!!!!!!!!!!!!!!!!onSubmit - Sign Up!!!!', this.regisForm.value);
      this.userService.register(this.regisForm.value).subscribe(res => {
        // console.log('Res: ' + res.token);
        localStorage.setItem('token', res.token);
     //   this.router.navigate(['/main'], {queryParams: {token: res.token}});
        this.navCtrl.setRoot(ProfilePage);
      }, error => {
        console.log('Ha habido un error al registrarse:' + error);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }
  }


  signUpFacebook(){
    this.facebook.login(['public_profile', 'email','user_birthday'])
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
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender,birthday',['public_profile','email','user_birthday'])
      .then(data=>{
        console.log(data);
        this.showUser = true;
        this.user = data;
        this.user.sex = data.gender;
        console.log(this.user);
        this.createForm2();

      })
      .catch(error =>{
        console.error( error );
      });
  }
}

