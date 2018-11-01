import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RecaptchaModule } from 'ng-recaptcha';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SupportPage} from '../pages/support/support';
import { LeadSymphonyPage } from '../pages/lead-symphony/lead-symphony';
import { SocialLinksPage } from '../pages/social-links/social-links';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    SupportPage,
    LeadSymphonyPage,
    SocialLinksPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    IonicModule.forRoot(MyApp,{},{
      links: [
        { component: LoginPage, name: 'Login', segment: 'login' },
        { component: ResetPasswordPage, name: 'rereset-passwordse', segment: 'reset-password' },
        { component: SupportPage, name: 'support', segment: 'support' },
        { component: LeadSymphonyPage, name: 'lead syphony', segment: 'lead syphony' },
        { component: SocialLinksPage, name: 'social-links', segment: 'social-links' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    SupportPage,
    LeadSymphonyPage,
    SocialLinksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
