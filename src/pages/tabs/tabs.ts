import { Component } from '@angular/core';

import { PlayPage } from '../play/play';
import { ContactsPage } from '../contacts/contacts';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlayPage;
  tab2Root = ContactsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
