import {Component, OnInit, Input, Output} from '@angular/core';
import Villain from "../models/villain";

@Component({
  selector: 'villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent implements OnInit {

 @Input() villain: Villain;

  constructor() {
  }

  ngOnInit() {
  }


  cancelClicked() {
    console.log('Cancel');
  }

  formSubmitted(villain) {
    //this.villain
    console.log(villain);
    // console.log(this.villain);
  }

}
