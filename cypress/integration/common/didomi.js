import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import DidomiHomePage from '../pages/didomi/didomi-home-page';
import DidomiNoticeConsentForm from '../pages/didomi/notice/notice-consent-form';

Given(/^I'm at Didomi$/, () => {
  DidomiHomePage.visit();
});

Given(/^Consent notice popup is displayed$/, () => {
  DidomiHomePage.validateNoticeIsDisplayed();
  DidomiNoticeConsentForm.validateNoticeTitle();
});

Then('Redirected to Homepage', () => {
  DidomiHomePage.validateRedirectedHome();
});
