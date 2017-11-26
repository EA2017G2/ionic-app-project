import { Component } from '@angular/core';

import { PlayPage } from '../play/play';
import { ContactsPage } from '../contacts/contacts';
import { ProfilePage } from '../profile/profile';
import { HelpPage } from '../help/help';
import {AccountPage} from "../account/account";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlayPage;
  tab2Root = ContactsPage;
  tab3Root = ProfilePage;
  tab4Root = AccountPage;
  tab5Root = HelpPage;
  constructor() {

  }
}
