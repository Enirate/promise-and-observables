import { ObservePromisePage } from './app.po';

describe('observe-promise App', function() {
  let page: ObservePromisePage;

  beforeEach(() => {
    page = new ObservePromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
