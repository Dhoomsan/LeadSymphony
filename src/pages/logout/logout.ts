import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {ServiceProvider} from '../providers/Service-provider';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
   
  }

  ionViewDidLoad() {
    // this.loadingCtrl.create({
    //   content: 'Please wait...',
    //   duration: 10000,
    //   dismissOnPageChange: true
    // }).present();
    
    ServiceProvider.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
