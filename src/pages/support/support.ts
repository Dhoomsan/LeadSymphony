import { Component } from '@angular/core';
import { IonicPage, NavController ,ToastController} from 'ionic-angular';
import { SocialLinksPage } from '../social-links/social-links';
import { ResetPasswordPage } from '../reset-password/reset-password';
import {FormBuilder,FormGroup, AbstractControl,Validators} from '@angular/forms';
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
  formGroup:FormGroup;
  TextArea:AbstractControl;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController,  public formBuilder:FormBuilder) {
    this.formGroup=formBuilder.group({
      TextArea:['',Validators.compose([Validators.required, Validators.minLength(20)])]
    });
    this.TextArea=this.formGroup.controls[''];
  }

  viewCtrl=function(){
    this.navCtrl.setRoot(SocialLinksPage);
  }
  viewBack=function(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }

  sendForm=function(){
    if(this.formGroup.valid){
      let toast = this.toastCtrl.create({
        message: 'We will contact you shortly',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      
      toast.present();
      this.navCtrl.setRoot(SocialLinksPage);
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Minimum 20 character required',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

}
