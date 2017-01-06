import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-new-hero-form',
  templateUrl: './new-hero-form.component.html',
  styleUrls: ['./new-hero-form.component.css']
})
export class NewHeroFormComponent implements OnInit {
  title: string;
  name: string;
  type: string;
  health: number;
  mana: number;
  dmg: number;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.title = "New Hero";
  }

  createHero() {
    const hero = new Hero(this.name, this.type, this.health, this.mana, this.dmg);
    this.heroService.addHero(hero);
  }
}
