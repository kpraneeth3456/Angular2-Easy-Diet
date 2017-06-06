import { EasyDietPage } from './app.po';

describe('easy-diet App', () => {
  let page: EasyDietPage;

  beforeEach(() => {
    page = new EasyDietPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
