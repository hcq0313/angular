import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studying',
  templateUrl: './studying.component.html',
  styleUrls: ['./studying.component.css']
})
export class StudyingComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/studys').subscribe((data)=>{
      this.courses = data;
    })
  }

}
