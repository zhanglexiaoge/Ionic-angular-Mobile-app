import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpRequestService} from '../../service/httpRequest';

/**
 * Generated class for the MoviesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-detail',
  templateUrl: 'movies-detail.html',
})
export class MoviesDetailPage {
  data:any;
  public dataBannerArr =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpRequestService : HttpRequestService) {
    this.data = navParams.get('id');
    console.log(this.data);


var url = "/v2/movie/subject/" + this.data;

 var that = this;
this.httpRequestService.get(url,null,function successCallback(res, msg){
console.log(res);
var strleixing = "";
res.genres.forEach(element => {
  strleixing = strleixing + element + "/";
});
res.leixing = strleixing;
var guojia = "";
res.countries.forEach(element => {
  guojia = guojia + element;
});
res.guojia= guojia ;

that.dataBannerArr.push(res);
}, function errorCallback(err){
 console.log(err);
})



 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailPage');
  }

}
