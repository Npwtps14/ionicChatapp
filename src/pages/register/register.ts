import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
//ส่วนของการโมดูล มาใช้โดยการอิมพอตมา

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register( user: User){
    try{

    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    if(info){
      this.navCtrl.setRoot('LoginPage');
    }

   }
   catch(e){
   console.error(e);
   }
   }


}
