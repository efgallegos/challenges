Feature: Didomi consent management platform notice 
  @e2e-test
  Scenario: Agreee and close
    Given I'm at Didomi
    And   Consent notice popup is displayed
    When  Click the Agree and Close button
    Then  Consent Agreed popup is displayed
    When  Click the Return to Homepage button
    Then  Redirected to Homepage
    And   Consent Agreed is no longer displayed
    And   Validate Didomi.getUserStatus() values
