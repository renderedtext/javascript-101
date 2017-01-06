/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewHeroFormComponent } from './new-hero-form.component';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { heroServiceStub } from '../services/hero.service.stub';

describe('NewHeroFormComponent', () => {
  let component: NewHeroFormComponent;
  let fixture: ComponentFixture<NewHeroFormComponent>;
  let heroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewHeroFormComponent ],
      providers: [{ provide: HeroService, useValue: heroServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroFormComponent);
    component = fixture.componentInstance;
    heroService = fixture.debugElement.injector.get(HeroService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined service', () => {
    expect(heroService).toBeDefined();
  });

  it('should have empty input field for name', () => {
    const compiled = fixture.debugElement.query(By.css('input[name="name"]'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it('should have empty input field for type', () => {
    const compiled = fixture.debugElement.query(By.css('input[name="type"]'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it('should have empty input field for health', () => {
    const compiled = fixture.debugElement.query(By.css('input[name="health"]'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it('should have empty input field for mana', () => {
    const compiled = fixture.debugElement.query(By.css('input[name="mana"]'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it('should have empty input field for damage', () => {
    const compiled = fixture.debugElement.query(By.css('input[name="damage"]'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it(`should have a button for creating heroes 'Create Hero'`, () => {
    const compiled = fixture.debugElement.query(By.css('button'));
    const el = compiled.nativeElement;
    expect(el.textContent).toEqual('Create Hero');
  });

  it('should add new Hero to heroService', () => {
    const initialLength = heroService.heroes.length;

    component.hero = new Hero('pls', 'pls', 0, 0, 0);
    component.createHero();

    const length = heroService.heroes.length;

    expect(length).toEqual(initialLength + 1);
  });

});
