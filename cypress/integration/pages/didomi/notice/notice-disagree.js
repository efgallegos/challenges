const RETURN_HOME = 'Return to homepage';
const TITLE_TEXT = 'We respect your choices and your privacy.';

class DidomiNoticeDisagree {
  static pressReturnHome() {
    cy.contains(RETURN_HOME).first().click({ force: true });
  }

  static validateNoticeTitle() {
    cy.contains(TITLE_TEXT).should('exist');
  }
}

export default DidomiNoticeDisagree;
