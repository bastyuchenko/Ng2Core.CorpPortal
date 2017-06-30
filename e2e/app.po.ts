import { browser, by, element } from 'protractor';

export class Ng2Core.CorpPortalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pm-app h1')).getText();
  }
}
