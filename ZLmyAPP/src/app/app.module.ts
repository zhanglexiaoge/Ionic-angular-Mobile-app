//根模块 告诉ionic如何组装应用

//引入angular 以及ionic的系统模块
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//要想使用 HttpClient，就要先导入 Angular 的 HttpClientModule。大多数应用都会在根模块 AppModule 中导入它
import { HttpClientModule } from '@angular/common/http';

import {HttpRequestService} from '../service/httpRequest'

//引入根组件
import { MyApp } from './app.component';
//引入组件
 import {ComponentsModule } from '../components/components.module';
 import { LoginPage } from '../pages/login/login';
 import { MoviesDetailPage } from '../pages/movies-detail/movies-detail';
//所有的页面和组件，自定义的组件 
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//ionic 打包成app以后配置启动画面  以及导航条的服务 （不用管）
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@NgModule({
  declarations: [/* 声明所需要的组件 */
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MoviesDetailPage,
    TabsPage
  ],
  imports: [/* 引入的模块 依赖的模块*/
    BrowserModule,
  //使用 HttpClient数据请求一定要使用这个
    HttpClientModule,
/* 注册这个模块*/
     ComponentsModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '返回' /*配置返回按钮*/
      })

  ],
  bootstrap: [IonicApp], /* 启动的模块 */
  entryComponents: [ /* 配置不会在模版使用的组件 */
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MoviesDetailPage,
    TabsPage
  ],
  providers: [/*配置服务 */
    HttpRequestService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
