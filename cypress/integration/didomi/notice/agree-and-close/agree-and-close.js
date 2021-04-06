import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import DidomiHomePage from '../../../pages/didomi/didomi-home-page';
import DidomiNoticeConsentForm from '../../../pages/didomi/notice/notice-consent-form';
import DidomiNoticeAgreed from '../../../pages/didomi/notice/notice-disagree';

When(/^Click the Agree and Close button$/, () => {
  DidomiNoticeConsentForm.pressAgreeAndClose();
});

Then(/^Consent Agreed popup is displayed$/, () => {
  DidomiNoticeAgreed.validateNoticeTitle();
});

When(/^Click the Return to Homepage button$/, () => {
  DidomiNoticeAgreed.pressReturnHome();
});

Then(/^Consent Agreed is no longer displayed$/, () => {
  DidomiHomePage.validateNoticeIsNotDisplayed();
});

Then(/^Validate Didomi.getUserStatus\(\) values$/, () => {
  DidomiNoticeConsentForm.validateUserStatus();
});
