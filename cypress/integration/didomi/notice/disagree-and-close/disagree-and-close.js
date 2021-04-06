import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import DidomiHomePage from '../../../pages/didomi/didomi-home-page';
import DidomiNoticeConsentForm from '../../../pages/didomi/notice/notice-consent-form';
import DidomiNoticeDisagree from '../../../pages/didomi/notice/notice-disagree';

When(/^Click the Disagree and Close button$/, () => {
  DidomiNoticeConsentForm.pressDisagreeAndClose();
});

Then(/^Consent Disagree popup is displayed$/, () => {
  DidomiNoticeDisagree.validateNoticeTitle();
});

When(/^Click the Return to Homepage button$/, () => {
  DidomiNoticeDisagree.pressReturnHome();
});

Then(/^Consent Disagree is no longer displayed$/, () => {
  DidomiHomePage.validateNoticeIsNotDisplayed();
});
