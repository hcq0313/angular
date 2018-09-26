import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() arr1:Array<any>;
  @Output() addIndex = new EventEmitter();

  txt:string;

  add(arr){
    this.addIndex.emit(arr);
  }

  getValue(e){
      if(e.keyCode==13){
        this.arr1.push(this.txt);
        this.txt='';
        this.local.set('list1',this.arr1);
      }
    }

  constructor(private local:CommonService) { }

  ngOnInit() {
  }

}
