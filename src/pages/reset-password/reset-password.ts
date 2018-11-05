import { Component} from '@angular/core';
import { IonicPage,NavController,ToastController} from 'ionic-angular';
import{FormBuilder, AbstractControl, FormGroup, Validators} from '@angular/forms';
import {LoginPage} from '../login/login';
import { ServiceProvider } from '../providers/Service-provider';
import {SupportPage} from '../support/support';
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {  
  // https://www.joshmorony.com/adding-captcha-to-ionic-with-nodejs-middleware/
  formGroup:FormGroup;
  Email:AbstractControl;
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder , public toastCtrl:ToastController) {
    this.formGroup=formBuilder.group({
      Email:['',Validators.compose([Validators.required, Validators.email, ServiceProvider.isEmailValid])],
    });
    this.Email=this.formGroup.controls[''];
  }

  logForm=function(){
      if(this.formGroup.valid){
      let toast = this.toastCtrl.create({
        message: 'Reset successfully',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
      this.navCtrl.setRoot(LoginPage);
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Email is not valid',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    }
  }

  support=function(){
    this.navCtrl.setRoot(SupportPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
