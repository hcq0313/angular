import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courses;
  ngOnInit() {
    this.http.get('/api/joincs').subscribe((data)=>{
      this.courses = data;
    })
  }

}
