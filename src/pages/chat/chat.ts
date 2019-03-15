import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {


  username : string='';
  message : string='';
  subscription;
  messages : any;

  constructor( public db: AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');

    this.subscription = this.db.list('/chat').valueChanges().subscribe( data => {
      console.log(data);
      this.messages = data;
      data.map( elem =>{
      this.messages.push(elem);
      console.log(elem);
      });
    });
  }



  sendMessage(){
    this.db.list('/chat').push({
      username : this.username,
      message : this.message
    }).then( () => {
      //message is sent

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
