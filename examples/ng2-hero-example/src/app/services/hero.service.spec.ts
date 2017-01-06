/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Hero } from '../models/hero';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Isolated HeroService', () => {
  let heroService: HeroService;
  let hero: Hero;

  beforeEach(() => {
    heroService = new HeroService();
    const hero = new Hero('NewHero', 'NewHeroType', 200, 100, 9001);
  });

  describe('constructor', () => {
    it('should be defined', () => {
      expect(heroService).toBeDefined();
    });

    it('should have heroes array', () => {
      expect(heroService.heroes).toEqual(jasmine.any(Array));
    });

    it('should have heroes array of length 5', () => {
      expect(heroService.heroes.length).toEqual(5);
    });
  });

  describe('#addHero', () => {
    it('should add hero to heroes array', () => {
      heroService.addHero(hero);

      const lastAddedHero = heroService.heroes[heroService.heroes.length - 1];
      expect(hero).toBe(lastAddedHero);
    });

    it('should increase the size of heroes array by one', () => {
      const initLength = heroService.heroes.length;
      heroService.addHero(hero);
      const newLength = heroService.heroes.length;

      expect(newLength).toEqual(initLength + 1);
    });
  });

  describe('#removeHero', () => {
    it('should not contain the same object at given index', () => {
      const idx = 1;
      const removedHero = heroService.heroes[idx];
      heroService.removeHero(idx);
      const newHeroAtIndex = heroService.heroes[idx];

      expect(removedHero).not.toBe(newHeroAtIndex);
    });

    it('should decrease the size of heroes array by one', () => {
      const initLength = heroService.heroes.length;
      heroService.removeHero(0);
      const newLength = heroService.heroes.length;

      expect(newLength).toEqual(initLength - 1);
    });

  });
});
