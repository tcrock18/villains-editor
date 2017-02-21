import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent implements OnInit {
  
  villain = {
    id: 1,
    name: 'Harambe'
  };
  
  constructor() {
  }

  ngOnInit() {
  }

}
