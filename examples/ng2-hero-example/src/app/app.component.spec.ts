/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

describe('AppComponent', () => {

  let appComp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroListComponent,
        HeroDetailComponent
      ],
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
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(appComp.title);
  }));

  it(`should have as description 'View, add and remove heroes'`, async(() => {
    expect(appComp.description).toEqual('View, add and remove heroes');
  }));

  it('should render description in small tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('small').textContent).toContain(appComp.description);
  }));

});
