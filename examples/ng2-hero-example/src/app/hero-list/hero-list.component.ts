import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.heroes;
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  removeHero(idx: number) {
    if (this.selectedHero === this.heroes[idx]) {
      this.selectedHero = undefined;
    }
    this.heroService.removeHero(idx);
  }

}
