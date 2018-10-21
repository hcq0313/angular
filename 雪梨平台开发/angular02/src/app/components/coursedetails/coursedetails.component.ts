import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  courseId:number;
  course;

  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses2/ '+ this.courseId).subscribe((data)=>{
      this.course = data;
      console.log(this.course);
    })  
  }

}
