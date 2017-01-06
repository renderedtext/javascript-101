/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';
import { heroServiceStub } from '../services/hero.service.stub';


describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;
  let heroService: HeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroListComponent,
        HeroDetailComponent
      ],
      providers: [{ provide: HeroService, useValue: heroServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heroes array', () => {
    expect(component.heroes).toBeDefined();
  });

  it('should have heroes array initialized to service\'s heroes array', () => {
    expect(component.heroes).toBe(heroService.heroes);
  });

  it('should have li tag for every heroes in hero array', () => {
    const compiled = fixture.debugElement.query(By.css('ul'));
    const el = compiled.nativeElement;

    expect(el.children.length).toEqual(component.heroes.length);
  });

  it('li element index should match hero index in heroes array', () => {
    const compiled = fixture.debugElement.query(By.css('ul'));
    const ulEl = compiled.nativeElement;
    const liEl = ulEl.children[0];
    const hero = component.heroes[0];

    expect(liEl.textContent).toContain(hero.name);
  });

  it('should remove hero from heroes', () => {
    const idx = 0;
    const removedHero = component.heroes[idx];
    component.removeHero(idx);
    const newHeroAtIndex = component.heroes[idx];

    expect(removedHero).not.toBe(newHeroAtIndex);
  });

  it('should decrease the length of heroes by one', () => {
    const initLength = component.heroes.length;
    component.removeHero(0);
    const newLength = component.heroes.length;

    expect(newLength).toEqual(initLength - 1);
  });
});
