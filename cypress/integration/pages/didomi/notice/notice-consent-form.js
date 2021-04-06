/* eslint-disable no-unused-expressions */
import DidomiNoticeAgreed from './notice-disagree';
import DidomiNoticeDisagree from './notice-agreed';

const LEARN_MORE = '#didomi-notice-learn-more-button';
const DISAGREE_BUTTON = '#didomi-notice-disagree-button';
const AGREE_BUTTON = '#didomi-notice-agree-button';
const TITLE_TEXT = 'Welcome to Didomi, beloved user!';

class DidomiNoticeConsentForm {
  static pressLearnMore() {
    cy.get(LEARN_MORE).first().click();
  }

  static pressDisagreeAndClose() {
    cy.interceptConsent(DISAGREE_BUTTON);
    return new DidomiNoticeDisagree();
  }

  static pressAgreeAndClose() {
    cy.interceptConsent(AGREE_BUTTON);
    return new DidomiNoticeAgreed();
  }

  static validateNoticeTitle() {
    cy.contains(TITLE_TEXT).should('exist');
  }

  static validateUserStatus() {
    cy.getUserStatus().should((userStatus) => {
      expect(userStatus).to.have.keys(['addtl_consent', 'purposes', 'vendors', 'user_id', 'updated', 'consent_string', 'addtl_consent']);
      expect(userStatus.user_id).to.not.be.null;
      expect(userStatus.user_id.length).eq(36);
    });
  }
}

export default DidomiNoticeConsentForm;
