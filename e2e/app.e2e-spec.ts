import { FipecliPage } from './app.po';

describe('fipecli App', function() {
  let page: FipecliPage;

  beforeEach(() => {
    page = new FipecliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
