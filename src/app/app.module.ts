import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ContactsPage } from '../pages/contacts/contacts';
import { PlayPage } from '../pages/play/play';
import { ChatPage } from '../pages/chat/chat'
import { TabsPage } from '../pages/tabs/tabs';
import { LoginComponent } from '../pages/login/login.component';
import { PlaystartedPage } from '../pages/playstarted/playstarted';
import { HelpPage } from '../pages/help/help';
import { AccountPage } from '../pages/account/account';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlayPage,
    ContactsPage,
    ChatPage,
    AccountPage,
    ProfilePage,
    PlaystartedPage,
    HelpPage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelpPage,
    ProfilePage,
    TabsPage,
    ChatPage,
    ContactsPage,
    AccountPage,
    PlaystartedPage,
    PlayPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
