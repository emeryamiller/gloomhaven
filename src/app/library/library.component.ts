import { Component, OnInit } from '@angular/core';
import { Monster } from '../common/monster';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  monsters: Monster[] = [
    new Monster('Bandit Archer', 8, 'http://www.cephalofair.com/wp-content/uploads/2015/09/Bandit-Archer.jpg'),
    new Monster('Bandit', 8, 'http://www.cephalofair.com/wp-content/uploads/2015/09/Bandit-Guard.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
