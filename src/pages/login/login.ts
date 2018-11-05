import { Component } from '@angular/core';
import { NavController,AlertController ,ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { ResetPasswordPage } from '../reset-password/reset-password';
import { SocialLinksPage } from '../social-links/social-links';
import {ServiceProvider} from '../providers/Service-provider';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  formgroup:FormGroup;
  UserName:AbstractControl;
  Password:AbstractControl;

  constructor(public formbuilder:FormBuilder,public navCtrl: NavController,public alertCtrl:AlertController, public toastCtrl:ToastController) {
    this.formgroup = formbuilder.group({
      UserName:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      Password:['',Validators.compose([Validators.required,Validators.maxLength(15)])]
    });

    this.UserName = this.formgroup.controls['UserName'];
    this.Password = this.formgroup.controls['Password'];


    if (ServiceProvider.isLogged()) {
      
      this.navCtrl.setRoot(SocialLinksPage);
    } 
  }
  todo = {}
  logForm=function(){
    if(this.formgroup.valid){
      let toast = this.toastCtrl.create({
        message: 'Logged successfully',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
      this.navCtrl.setRoot(SocialLinksPage);

      // store login status
      ServiceProvider.login();
      
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    } 
  }
  reset_password(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }

}
