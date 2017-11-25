import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../login/login.component';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = HomePage;
  tab1Root = MainComponent;
  tab2Root = AboutPage;
  constructor() {

  }
}
