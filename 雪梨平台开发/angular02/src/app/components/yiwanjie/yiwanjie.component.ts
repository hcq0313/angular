import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-yiwanjie',
  templateUrl: './yiwanjie.component.html',
  styleUrls: ['./yiwanjie.component.css']
})
export class YiwanjieComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/tasks1').subscribe((data)=>{
    this.courses = data;
    })
  }

}
