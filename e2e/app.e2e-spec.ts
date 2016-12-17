import { AdbcdlivePage } from './app.po';

describe('adbcdlive App', function() {
  let page: AdbcdlivePage;

  beforeEach(() => {
    page = new AdbcdlivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
