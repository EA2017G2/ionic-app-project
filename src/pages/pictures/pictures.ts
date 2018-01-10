import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlayPage} from "../play/play";
import { ImagePicker } from 'ionic-native';

@Component({
  selector: 'page-pictures',
  templateUrl: 'pictures.html'
})
export class PicturesPage {
  constructor(public navCtrl: NavController) {

  }

  onClick5() {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }
    ImagePicker.getPictures(options).then(
      file_uris => this.navCtrl.push(PlayPage, {images: file_uris}),
      err => console.log('uh oh')
    );
    //añadir foto

    // this.navCtrl.setRoot(PlayPage);
  }
}

