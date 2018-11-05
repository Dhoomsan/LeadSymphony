import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  posts: any;
  character;
  constructor(public toastCtrl: ToastController,public http: Http,public navCtrl: NavController, public navParams: NavParams) {

    this.http.get('https://randomuser.me/api/?results=10').map(res => res.json()).subscribe(data => {
          this.posts = data.results;
      },err => {
        console.log("Oops!");
    });

    

  }
  getdetails(a:string){
    let toast = this.toastCtrl.create({
      message: 'clicked on '+a,
      duration: 2000,
    });
    toast.present(toast);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
