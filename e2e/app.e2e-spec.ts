import { ConsultantsFrontPage } from './app.po';

describe('consultants-front App', () => {
  let page: ConsultantsFrontPage;

  beforeEach(() => {
    page = new ConsultantsFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
