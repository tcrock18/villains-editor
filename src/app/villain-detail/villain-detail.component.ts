import { Component, OnInit } from '@angular/core';
import Villain from "../models/villain";

@Component({
  selector: 'villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent implements OnInit {
  
  villain: Villain = {
    id: 1,
    name: 'Harambe',
    power: 5
  };
  
  constructor() {
  }

  ngOnInit() {
  }
  
  savedClicked() {
    console.log(this.villain);
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
