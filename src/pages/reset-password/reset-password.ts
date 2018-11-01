import { Component} from '@angular/core';
import { IonicPage,NavController} from 'ionic-angular';
import{LoginPage} from '../login/login';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  // https://www.joshmorony.com/adding-captcha-to-ionic-with-nodejs-middleware/
  ErrorEmail:string;
  // private captchaPassed: boolean = false;
  // private captchaResponse: string;
  constructor(public navCtrl: NavController ) {
  }

  // captchaResolved(response: string): void {
 
  //   this.zone.run(() => {
  //       this.captchaPassed = true;
  //       this.captchaResponse = response;
  //   });

  // }
  // sendForm(): void {
  //     if(this.captchaPassed){
  //       // submit the form
  //   } else {
  //       // do not submit the form
  //   }
  //   let data = {
  //       captchaResponse: this.captchaResponse
  //   };     

  //   this.http.post('http://localhost:8100/test', data).subscribe(res => {
  //       console.log(res);
  //   });

  // }

  // support=function(){
  //   this.navCtrl.setRoot(SupportPage);
  // }
  todo={};
  logForm=function(){
    if(this.todo.Email== null){
      this.ErrorUser="Email cannot be empty!";
    }
    if(this.todo.Email!= null){
      this.ErrorEmail="";
    }

    if(this.todo.Email!= null){
      console.log("Output "+this.todo.Email);
      let toast = this.toastCtrl.create({
        message: 'Successfully',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
      
      this.navCtrl.setRoot(LoginPage);
    }    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
