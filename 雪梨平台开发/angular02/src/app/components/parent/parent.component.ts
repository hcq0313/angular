import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private share:ShareService) { }
  add(){
    this.share.add(100);
  }
  ngOnInit() {
  }

}
