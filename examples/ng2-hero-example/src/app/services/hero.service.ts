import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {

  heroes: Hero[];

  constructor() {
    this.heroes = [];
    this.heroes.push(new Hero('Zed', 'Assaissin', 550, 0, 70));
    this.heroes.push(new Hero('Sona', 'Support', 500, 300, 55));
    this.heroes.push(new Hero('Shen', 'Tank', 650, 0, 60));
    this.heroes.push(new Hero('Lucian', 'Marksman', 500, 250, 60));
    this.heroes.push(new Hero('Ahri', 'Mage', 550, 350, 55));
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  removeHero(idx: number) {
    this.heroes.splice(idx, 1)
  }
}
