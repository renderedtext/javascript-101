import { Hero } from '../models/hero';

export const heroServiceStub = {
  heroes : [
    new Hero('Zed', 'Assaissin', 600, 0, 70),
    new Hero('Shen', 'Tank', 700, 0, 60)
  ],
  addHero(hero) {
    this.heroes.push(hero);
  },
  removeHero(idx) {
    this.heroes.splice(idx, 1);
  }
};


