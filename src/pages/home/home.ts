import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = '';

  constructor(private alertCtrl: AlertController , public navCtrl: NavController) {

  }
  alert(title : string , message : string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  loginUser(){
    if(/^[a-zA-z0-9+$]/.test(this.username)){
      this.navCtrl.push(ChatPage, {username : this.username});  // we are redirecting user to another page
    }else{
      this.alert("Error",'Invalid username');
    }
  }

  LogOut(){
  this.navCtrl.push('LoginPage');
}
}
