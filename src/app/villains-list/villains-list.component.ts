import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'villains',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.scss']
})
export class VillainsListComponent implements OnInit {
  
  villains = [
    {
      id: 1,
      name: 'Harambe'
    },
    {
      id: 2,
      name: 'Darth Vader'
    },
    {
      id: 3,
      name: 'Dead Pool'
    },
    {
      id: 4,
      name: 'Lawyers'
    }
  ];
  
  
  constructor() {
    
  }
  
  ngOnInit() {
  }
  
}
