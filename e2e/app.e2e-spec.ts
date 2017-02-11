import { CodedummyHeroeAngular2Page } from './app.po';

describe('codedummy-heroe-angular2 App', function() {
  let page: CodedummyHeroeAngular2Page;

  beforeEach(() => {
    page = new CodedummyHeroeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
