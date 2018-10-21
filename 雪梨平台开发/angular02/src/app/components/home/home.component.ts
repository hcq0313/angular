import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http :HttpClient) { }
  timer = null;
  course;
  headers = new HttpHeaders({});
  ngOnInit() {
    // this.timer = setInterval(function(){
    //   console.log(11);
    // },1000)
    //this.http.get('http://localhost:8000').subscribe((data)=>{
     // this.http.get('/api/courses/1').subscribe((data)=>{
       
    // this.http.post('/api',{name:'hou',psw:123456},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    // });
  }
  ngOnDestory(){
    // console.log(11);
    // clearInterval(this.timer);
  }
}
