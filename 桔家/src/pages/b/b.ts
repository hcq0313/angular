import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import{HttpClient } from "@angular/common/http";


@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  items=[];
  icons:string ="camera";
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  ionViewDidLoad() {
    //console.log(this.navParams.data);
    console.log(this.navParams.get("id"));
  }

  doInfinite(infiniteScroll) {
    // console.log('Begin async operation');

    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }

    //   // 刷新过一次之后就没有了
    //   infiniteScroll.enable();
    //   console.log('Async operation has ended');
    //   infiniteScroll.complete();
    // }, 500);

    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
