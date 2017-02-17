import { VillansPage } from './app.po';

describe('villans App', () => {
  let page: VillansPage;

  beforeEach(() => {
    page = new VillansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
