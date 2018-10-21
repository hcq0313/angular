import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tongbukedetail',
  templateUrl: './tongbukedetail.component.html',
  styleUrls: ['./tongbukedetail.component.css']
})
export class TongbukedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/ '+ this.courseId).subscribe((data)=>{
      this.course = data;
    })   
  }
}


