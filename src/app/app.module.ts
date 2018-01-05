import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ContactsPage } from '../pages/contacts/contacts';
import { PlayPage } from '../pages/play/play';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { PicturesPage } from '../pages/pictures/pictures';
import { RegisterPage } from '../pages/register/register.component';
import { ForgetPasswordPage } from '../pages/forgetpassword/forgetpassword';
import { LoginComponent } from '../pages/login/login.component';
import { PlaystartedPage } from '../pages/playstarted/playstarted';
import { HelpPage } from '../pages/help/help';
import { AccountPage } from '../pages/account/account';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../pages/auth/tokenInterceptor';
import { AuthService } from '../pages/auth/authService';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from "../pages/services/user.service";
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlayPage,
    PicturesPage,
    RegisterPage,
    ContactsPage,
    ChatPage,
    ForgetPasswordPage,
    AccountPage,
    ProfilePage,
    PlaystartedPage,
    HelpPage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelpPage,
    ProfilePage,
    TabsPage,
    ChatPage,
    ForgetPasswordPage,
    ContactsPage,
    AccountPage,
    PicturesPage,
    PlaystartedPage,
    PlayPage,
    RegisterPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    AuthService,
    UserService,
    Facebook,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
