import { HeroExamplePage } from './app.po';

describe('hero-example App', function() {
  let page: HeroExamplePage;

  beforeEach(() => {
    page = new HeroExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
