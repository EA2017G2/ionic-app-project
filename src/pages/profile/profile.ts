import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  distance: number = 0;
  age: any = { lower: 18, upper: 90 };
  showme: string = "f";

  constructor(public navCtrl: NavController) {

  }
  onClick(){
    console.log("hola");
   // this.navCtrl.setRoot(TabsPage);
  }
}
