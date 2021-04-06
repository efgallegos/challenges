const RETURN_HOME = 'Return to homepage';
const TITLE_TEXT = 'Thank you for agreeing to our use of cookies.';

class DidomiNoticeAgreed {
  static pressReturnHome() {
    cy.contains(RETURN_HOME).first().click();
  }

  static validateNoticeTitle() {
    cy.contains(TITLE_TEXT).should('exist');
  }
}

export default DidomiNoticeAgreed;
