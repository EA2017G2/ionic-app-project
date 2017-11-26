import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MainPage } from '../main/main';
import { HelpPage } from '../help/help';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = AboutPage;
  tab3Root = AboutPage;
  tab4Root = AboutPage;
  tab5Root = HelpPage;
  constructor() {

  }
}
