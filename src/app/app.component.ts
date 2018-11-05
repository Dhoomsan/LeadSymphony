import { Component ,ViewChild} from '@angular/core';
import {Nav,LoadingController} from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { SocialLinksPage } from '../pages/social-links/social-links';
import { LogoutPage } from '../pages/logout/logout';
import  {PeoplePage} from '../pages/people/people';

import {ServiceProvider} from '../pages/providers/Service-provider';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>;
  constructor(public loadingCtrl:LoadingController) {
    this.initializeApp();
    
    if (ServiceProvider.isLogged()) {
      this.rootPage=SocialLinksPage;
    }
     
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Social', component: SocialLinksPage },
      {title: 'People',component:PeoplePage},
      { title: 'Logout', component: LogoutPage },
      
    ];

  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    let loader=this.loadingCtrl.create({
      content: 'Loading...',
      // content: `
      // <div class="custom-spinner-container">
      //   <div class="custom-spinner-box"></div>
      // </div>`,
    });
    loader.present();

    this.nav.setRoot(page.component).then(
        () => {
            loader.dismiss();
        }
    );
  }
}