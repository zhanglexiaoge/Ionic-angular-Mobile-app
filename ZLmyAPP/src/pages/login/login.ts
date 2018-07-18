import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

public msg ="1212111222111";
listErrMsg: string = ''; // 列表请求的错误信息
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  // RequestService.getData()

  }


   
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
