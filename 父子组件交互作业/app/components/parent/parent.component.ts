import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  txt:string;
  arr1:string[]=[];
  arr2:string[]=[];

  //删除
  del(i){
    console.log(i);
    this.arr1.splice(i,1)
    this.local.set('list1',this.arr1);
  }
  del1(i){
    this.arr2.splice(i,1)
    this.local.set('list2',this.arr2);
  }

  //从上面跳到下面
  change(i){
    let ele=this.arr1.splice(i,1);
    this.arr2.push(ele[0]);
  //  console.log(2);
    this.local.set('list1',this.arr1);
    this.local.set('list2',this.arr2);
  }

  //从下面跳到上面
  change1(i){
    this.arr1.push(this.arr2[i]);
  // console.log(1);
    this.arr2.splice(i,1);
    this.local.set('list2',this.arr2);
    this.local.set('list1',this.arr1);
  }

  constructor( private local:CommonService) { }

  ngOnInit() {
    if(this.local.get("list1")){
      this.arr1 = localStorage.getItem("list1").split(",");
    }else{}
    if(this.local.get("list2")){
      this.arr2=localStorage.getItem("list2").split(",");
    }else{}
  }
}