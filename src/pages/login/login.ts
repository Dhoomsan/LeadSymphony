import { Component } from '@angular/core';
import { NavController,AlertController ,ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { ResetPasswordPage } from '../reset-password/reset-password';
import { SocialLinksPage } from '../social-links/social-links';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  formgroup:FormGroup;
  UserName:AbstractControl;
  Password:AbstractControl;

  ErrorUser:string;
  ErrorPassword:string;
  constructor(public formbuilder:FormBuilder,public navCtrl: NavController,public alertCtrl:AlertController, public toastCtrl:ToastController) {
    this.formgroup = formbuilder.group({
      UserName:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      Password:['',Validators.compose([Validators.required,Validators.maxLength(15)])]
    });

    this.UserName = this.formgroup.controls['UserName'];
    this.Password = this.formgroup.controls['Password'];
  }
  todo = {}
  logForm=function(){
    // if(this.todo.Username== null){
    //   this.ErrorUser="User Name cannot be empty!";
    // }
    // if(this.todo.Username!= null){
    //   this.ErrorUser="";
    // }

    // if(this.todo.Password== null){
    //   this.ErrorPassword="Password cannot be empty!";
    // }
    // if(this.todo.Password!= null){
    //   this.ErrorPassword="";
    // }

    // if(this.todo.Password!= null && this.todo.Username!= null){
    //   console.log("Output "+this.todo.Username+" - "+this.todo.Password);
    //   let toast = this.toastCtrl.create({
    //     message: 'Logged successfully',
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.onDidDismiss(() => {
    //     console.log('Dismissed toast');
    //   });
    
    //   toast.present();
      
    //   this.navCtrl.setRoot(SocialLinksPage);
    // }   
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
