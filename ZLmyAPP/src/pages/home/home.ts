import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage } from '../login/login';

import {HttpRequestService} from '../../service/httpRequest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private api_sku_save = 'https://api.douban.com/v2/movie/in_theaters';
  
 public testurl = 'http://192.168.1.105:8181/InteractionBulletScreenPro/mobile/testInterface.shtml';
  public loact = 'http://localhost:8100';

  // public loact = 'http://192.168.0.136:8100';
  
  
  // constructor(public navCtrl: NavController,private httpRequestService:HttpRequestService ) {

  // }

  constructor(public navCtrl: NavController ,private httpRequestService : HttpRequestService) {

  }

  ionViewDidEnter() {

    console.log("正在加载，请求中");
   // this.httpRequestService.httpGet(this.loact +  '/InteractionBulletScreenPro/mobile/testInterface.shtml',this,"movies");

   

    this.httpRequestService.httpGet('http://192.168.1.105:8181/InteractionBulletScreenPro/mobile/testInterface.shtml',this,"movies");
  }


  getOk (val, flag){
    console.log(val);
  }
  getErr (val, flag){
   
    console.log(val);
  }

  navTologin(){
   this.navCtrl.push(LoginPage);

  }


}
