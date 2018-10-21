import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})


export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) {}

  courseId:number;
  courses;

  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses = data;
    })
  }
}

// ngOnInit() {
//   this.http.get('/api/courses').pipe(map(data=>{
//       data.name = 'haha';//可以进行处理
//       return data;//返回的值就是下面data的内容
//     })).pipe(filter(data=>{
//       return data.id==3;
//     })).subscribe((data)=>{
//       console.log(data);
//       this.courses = data;
//     })
//   }
// }