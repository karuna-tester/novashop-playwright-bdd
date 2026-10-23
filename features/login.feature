Feature: Nova Shop login

  @NS-001 @positive @smoke
  Scenario: Standard customer signs in
    Given the customer opens the login page
    When the customer signs in as the "standard" account
    Then the product catalogue is displayed

  @NS-002 @negative
  Scenario: Slow-login customer can sign in without a fixed sleep
    Given the "slow" account is configured
    And the customer opens the login page
    When the customer signs in as the "slow" account
    Then the product catalogue is displayed

  @NS-021 @positive @smoke
  Scenario: Customer can end the authenticated session
    Given the customer is logged in
    When the customer logs out
    Then the login form is displayed

  @NS-022 @negative
  Scenario: Invalid account credentials display a login error
    Given the customer opens the login page
    When the customer signs in with an unrecognised username and a bad password
    Then the login error matches "do not match|invalid"
    And the login page is displayed

  @NS-023 @negative
  Scenario: Locked customer account cannot access the product catalogue
    Given the "locked" account is configured
    And the customer opens the login page
    When the customer signs in as the "locked" account
    Then the login error matches "locked|unavailable|disabled"
    And the login page is displayed

  @NS-024 @negative
  Scenario: Empty credentials do not authenticate the customer
    Given the customer opens the login page
    When the customer signs in with username "" and password ""
    Then the login page is displayed
    And the sign in button is displayed
