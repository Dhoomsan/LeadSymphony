import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialLinksPage } from '../social-links/social-links';
import { ResetPasswordPage } from '../reset-password/reset-password';
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  viewCtrl=function(){
    this.navCtrl.setRoot(SocialLinksPage);
  }
  viewBack=function(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }
  social=function(){
    this.navCtrl.setRoot(SocialLinksPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
