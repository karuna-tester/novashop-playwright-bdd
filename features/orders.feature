Feature: Nova Shop customer orders

  @NS-018 @positive @smoke
  Scenario: Checkout confirmation is reflected in customer order history
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer notes the checkout total
    When the customer places the order
    Then the order confirmation is displayed
    And the confirmation shows the noted total
    And the confirmation field "Items" is "1"
    And the confirmation field "Delivery" matches "standard"
    And the confirmation field "Payment" is "Card"
    When the customer opens their order history
    Then the placed order is listed with status "Processing" and the noted total

  @NS-037 @validation @regression
  Scenario: Order details preserve captured customer and destination data
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer places the order
    And the order confirmation is displayed
    When the customer opens their order history
    And the customer opens the details of the placed order
    Then the order details show the shipping destination of the checkout customer
    And the page shows the text "Aurora Wireless Headphones"

  @NS-019 @positive @regression
  Scenario: Customer can cancel an eligible processing order
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the checkout page
    And the customer fills in valid checkout details
    And the customer places the order
    And the order confirmation is displayed
    And the customer opens their order history
    And the customer opens the details of the placed order
    When the customer cancels the order and confirms the cancellation
    Then the placed order is listed with status "Cancelled"
