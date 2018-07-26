import { Component,ViewChild } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';

// import {LoginPage } from '../login/login';
import {MoviesDetailPage } from '../movies-detail/movies-detail';

import {HttpRequestService} from '../../service/httpRequest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

//   private api_sku_save = 'https://api.douban.com/v2/movie/in_theaters';

public BannerArr =[];
  
  constructor(public navCtrl: NavController ,private httpRequestService : HttpRequestService) {
    console.log("正在加载，请求中");

    var that = this;
this.httpRequestService.get('/v2/movie/in_theaters',null,function successCallback(res, msg){
console.log(res.count);
//获取数据成功 要展示出来 
var arrayone = res.subjects;
console.log(arrayone);
arrayone.forEach(element => {
  //console.log(element.images.small);

  
 
  var strName = "";
  element.casts.forEach(item => {
    strName = strName + item.name  + " ";
  });

  
  element.strName = "主演:"+strName;
  console.log(element.strName);
 


  that.BannerArr.push(element);
});
console.log(that.BannerArr);


}, function errorCallback(err){
 console.log(err);
}
)


  }

 
  ionViewDidEnter() {
//     console.log("正在加载，请求中");

//     var that = this;
// this.httpRequestService.get('/v2/movie/in_theaters',null,function successCallback(res, msg){
// console.log(res.count);
// //获取数据成功 要展示出来 
// var arrayone = res.subjects;
// console.log(arrayone);
// arrayone.forEach(element => {
//   //console.log(element.images.small);

  
 
//   var strName = "";
//   element.casts.forEach(item => {
//     strName = strName + item.name  + " ";
//   });

  
//   element.strName = "主演:"+strName;
//   console.log(element.strName);
 


//   that.BannerArr.push(element);
// });
// console.log(that.BannerArr);


// }, function errorCallback(err){
//  console.log(err);
// }
// )

}


  navTologin(id){
   this.navCtrl.push(MoviesDetailPage, {
    id : id
});

  }


}
