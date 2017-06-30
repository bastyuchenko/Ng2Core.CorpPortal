import { Ng2Core.CorpPortalPage } from './app.po';

describe('ng2-core.corp-portal App', () => {
  let page: Ng2Core.CorpPortalPage;

  beforeEach(() => {
    page = new Ng2Core.CorpPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
