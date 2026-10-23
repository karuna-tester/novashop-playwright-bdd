Feature: Nova Shop checkout

  @NS-028 @negative @regression
  Scenario: Checkout reports required field validation and does not place an empty order
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    When the customer places the order
    Then the checkout shows an error summary
    And the checkout shows the message "First name is required"
    And the checkout shows the message "Enter a valid email address"
    And the checkout shows the message "You must accept the terms"
    And the checkout page is still displayed

  @NS-029 @negative @regression
  Scenario: Malformed email, phone, and ZIP are rejected by checkout
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer enters email "invalid", phone "123" and ZIP code "12"
    When the customer places the order
    Then the checkout shows the message "Enter a valid email address"
    And the checkout shows the message "Phone must be 10 digits"
    And the checkout shows the message "ZIP code must be 5 digits"

  @NS-036 @validation @regression
  Scenario: Terms must be accepted before an order can be placed
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer clears the terms checkbox
    When the customer places the order
    Then the checkout shows the message "You must accept the terms"
    And the checkout page is still displayed

  @NS-030 @negative @regression
  Scenario: Card and delivery fields expose their mandatory messages
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    When the customer places the order
    Then the checkout shows the message "Card number must be 16 digits"
    And the checkout shows the message "Use MM/YY"
    And the checkout shows the message "CVV must be 3 digits"
    And the checkout shows the message "Select a state"

  @NS-040 @validation @regression
  Scenario: Express delivery adds the displayed delivery charge to the total
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    When the customer chooses the "Express" delivery or payment option
    Then the checkout shipping is 15 and the total is subtotal plus shipping plus tax

  @NS-017 @positive @regression
  Scenario: Cash on delivery completes an order without card entry
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer chooses the "Cash on delivery" delivery or payment option
    And the customer fills in the contact details only
    And the customer accepts the terms
    When the customer places the order
    Then the order confirmation is displayed
    And the confirmation field "Payment" matches "cash|cod"

  @NS-031 @negative @regression
  Scenario: Documented declined practice card does not complete the order
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer enters card number "4000000000000002"
    When the customer places the order
    Then no order confirmation is displayed
    And a declined message is displayed
