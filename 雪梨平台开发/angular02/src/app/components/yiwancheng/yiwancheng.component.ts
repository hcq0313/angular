import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-yiwancheng',
  templateUrl: './yiwancheng.component.html',
  styleUrls: ['./yiwancheng.component.css']
})
export class YiwanchengComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/tasks').subscribe((data)=>{
      this.courses = data;
    })
  }

}
