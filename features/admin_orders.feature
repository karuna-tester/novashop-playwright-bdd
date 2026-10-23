Feature: Nova Shop order management

  @NS-020 @positive @regression
  Scenario: Manager can ship and deliver a newly placed customer order
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer places the order
    And the order confirmation is displayed
    When the customer logs out
    And the customer signs in as the "admin" account
    Then the order management page is displayed
    And the placed order row in order management shows "Processing"
    And the order management "To ship" metric is "1"
    When the manager marks the placed order as shipped
    Then the placed order row in order management shows "Shipped"
    When the manager marks the placed order as delivered
    Then the placed order row in order management shows "Delivered"
