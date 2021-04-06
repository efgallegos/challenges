const NOTICE_POPUP = '#didomi-popup';

class DidomiHomePage {
  static visit() {
    cy.visit('/');
  }

  static validateNoticeIsDisplayed() {
    cy.get(NOTICE_POPUP).should('be.visible');
  }

  static validateNoticeIsNotDisplayed() {
    cy.get(NOTICE_POPUP).should('not.exist');
  }

  static validateRedirectedHome() {
    cy.url().should('eq', 'https://www.didomi.io/#');
  }
}

export default DidomiHomePage;
