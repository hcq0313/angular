import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-shequdetails',
  templateUrl: './shequdetails.component.html',
  styleUrls: ['./shequdetails.component.css']
})
export class ShequdetailsComponent implements OnInit {

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
