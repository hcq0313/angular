import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { APage } from '../a/a';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  icons:string="tuijian";
  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  // ionViewDidLoad(){
  //   this.ac.get();
  // }
  zhuce(){
    this.navCtrl.push(APage);
  }
}
