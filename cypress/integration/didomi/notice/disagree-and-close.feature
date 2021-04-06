Feature: Didomi consent management platform notice 
  @e2e-test
  Scenario: Disagree and close
    Given I'm at Didomi
    And   Consent notice popup is displayed
    When  Click the Disagree and Close button
    Then  Consent Disagree popup is displayed
    When  Click the Return to Homepage button
    Then  Redirected to Homepage
    And   Consent Disagree is no longer displayed

