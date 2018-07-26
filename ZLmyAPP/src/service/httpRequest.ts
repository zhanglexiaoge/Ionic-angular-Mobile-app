
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable()
export class HttpRequestService {

  constructor(private http : HttpClient) {

    console.log('Hello HttpRequestService');

   }
 
   public Baseapi = 'https://api.douban.com';
   public post(url: string, params: any = null, successCallback, errorCallback): any {
    // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
    // 正式发布不能使用代理，此处要做个处理
    url = this.getUrl(url);
    return this.http.post(url, null, {
      params: params,
      headers: this.getHeaders(), // 添加token信息
    }).subscribe((res: any) => {
      
      this.responseSuccess(res, function (msg) {
        if (successCallback) {
          successCallback(res, msg);
        }
      });
    }, err => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
  }

 // get数据
 public get(url: string, params : any=null, successCallback, errorCallback): any {
 // const token = this.getToken();
  //url = this.getUrl(url);
  // return this.http.get(url, {
  //   headers: this.getHeaders(), // 添加token信息
  //   params: params
  // });
  url = this.getUrl(url);
  return this.http.get(url, {
    headers: this.getHeaders(), // 获取请求头
    params: params
  }).subscribe((res: any) => {
    // this.responseSuccess(res, function (msg) {
    //   if (successCallback) {
    //     successCallback(res, msg);
    //   }
    // });
    console.log('请求成功1111111');
    if (successCallback) {
      successCallback(res, '成功');
    }


  }, err => {
    if (errorCallback) {
      // errorCallback(err);
    }
    
  });


}


 /**
   * 处理响应的事件
   * @param res
   * @param {Function} error
   */
  private responseSuccess(res: any, callback) {
   console.log('请求成功1111111');
   console.log(res);
 //判断请求返回数据的code 码

   callback(res);


    // if (res.code !== '0') { // 失败
    //   if (res.msg) {
    //     callback({code: res.code, msg: res.msg});
    //   } else {
    //     const data = res.data;
    //     let errorMsg = '操作失败！';
    //     data.map(i => {
    //       errorMsg = i.errorMsg + '\n';
    //     });
    //     callback({code: res.code, msg: errorMsg});
    //   }
    // } else {
    //   callback(res);
    // }



  }


// /**
//    * 处理请求失败事件
//    * @param url
//    * @param err
//    */
//   private requestFailed(url: string, err) {
//     let msg = '请求发生异常';
//     const status = err.status;
//     if (status === 0) {
//       msg = '请求失败，请求响应出错';
//     } else if (status === 404) {
//       msg = '请求失败，未找到请求地址';
//     } else if (status === 500) {
//       msg = '请求失败，服务器出错，请稍后再试';
//     } else {
//       msg = '未知错误，请检查网络';
//     }
//     return msg;
 
//   }





 /**
   * 处理正式发布环境导致的路径问题，请求出错
   * @param url
   * @returns {any}
   */
  private getUrl(url) {
    // TODO 开发环境这段可以先注释掉
    let realUrl;
    // if (url.startsWith('upms')) {
    //   realUrl = this.upmsUrl + '/' + url;
    // } else if(url.startsWith('/upms')) {
    //   realUrl = this.upmsUrl + url;
    // } else if(url.startsWith('api')) {
    //   realUrl = this.apiUrl + '/' + url;
    // } else {
    //   realUrl = this.apiUrl + url
    // }

    realUrl = this.Baseapi +url;
    url = realUrl;
    return url;
  }
 

/**
   * 头部信息获取，比如添加主要用于处理token 
   */
  private getHeaders() {
    //const token = this.getToken();
    const headers = {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'};
    // if (token) {
    //   headers['token'] = token;
    // }
    return new HttpHeaders(headers);
  }











 
 
 
}