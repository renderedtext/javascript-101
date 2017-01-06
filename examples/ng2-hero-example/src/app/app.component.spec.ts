/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NewHeroFormComponent } from './new-hero-form/new-hero-form.component';

import { HeroService } from './services/hero.service';
import { heroServiceStub } from './services/hero.service.stub';

describe('AppComponent', () => {

  let appComp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeroListComponent,
        HeroDetailComponent,
        NewHeroFormComponent
      ],
      providers: [{ provide: HeroService, useValue: heroServiceStub }]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComp = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(appComp).toBeTruthy();
  }));

  it(`should have as title 'Hero App'`, async(() => {
    expect(appComp.title).toEqual('Hero App');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('h1'));
    const el = compiled.nativeElement;
    expect(el.textContent).toContain(appComp.title);
  }));

  it(`should have as description 'View, add and remove heroes'`, async(() => {
    expect(appComp.description).toEqual('View, add and remove heroes');
  }));

  it('should render description in small tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('small'));
    const el = compiled.nativeElement;
    expect(el.textContent).toContain(appComp.description);
  }));

});
