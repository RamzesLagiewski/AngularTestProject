import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  position = 0;
  myHero = HEROES[this.position];
  Back(event) {
    if (this.position > 0) {
      this.position--;
      this.myHero = HEROES[this.position];
    }
  }
  Forward(event) {
    this.position++;
    this.myHero = HEROES[this.position];
  }
  constructor() { }
  ngOnInit() {
  }

}
