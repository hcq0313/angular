import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private share:ShareService) { }
  arr;
  ngOnInit() {
    this.arr=this.share.data;
  }

}
