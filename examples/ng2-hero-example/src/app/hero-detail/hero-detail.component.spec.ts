/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../models/hero';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let hero: Hero = new Hero('Shen', 'Tank', 700, 0, 55);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    component.hero = hero;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero property with given attributes', () => {
    expect(component.hero).toBeDefined();
    expect(component.hero.name).toEqual('Shen');
    expect(component.hero.type).toEqual('Tank');
    expect(component.hero.health).toEqual(700);
    expect(component.hero.mana).toEqual(0);
    expect(component.hero.dmg).toEqual(55);
  });

  it('should have p tag with hero name', async(() => {
    expect(fixture.debugElement.query(By.css('#name')).textContent).toContain(hero.name);
  }));

  it('should have p tag with hero type', async(() => {
    expect(fixture.debugElement.query(By.css('#type')).textContent).toContain(hero.type);
  }));

  it('should have p tag with hero health', async(() => {
    el = fixture.nativeElement.debugElement.query(By.css('h1'));
    expect(el.textContent).toContain('Details');
  }));

  it('should have p tag with hero mana', () => {
  
  });

  it('should have p tag with hero damage', () => {
  
  });
});
