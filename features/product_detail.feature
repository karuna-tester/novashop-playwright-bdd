Feature: Nova Shop product detail

  @NS-011 @positive @smoke
  Scenario: Customer inspects product options and adds a selected variant
    Given the customer is logged in
    And the customer opens the detail page for product "p1"
    Then the product heading "Aurora Wireless Headphones" is displayed
    When the customer selects the product option "Lilac"
    And the customer adds the product to the cart
    And the customer opens the cart
    Then the page shows the text "Colour: Lilac"

  @NS-035 @validation @regression
  Scenario: Product quantity respects both minimum and maximum UI boundaries
    Given the customer is logged in
    And the customer opens the detail page for product "p1"
    Then the product quantity is "1"
    And the decrease quantity button is disabled
    When the customer enters the product quantity "12"
    Then the product quantity is "12"
    And the increase quantity button is disabled

  @NS-009 @positive @regression
  Scenario: Product tabs switch the detail panel content
    Given the customer is logged in
    And the customer opens the detail page for product "p1"
    And the customer notes the current product panel content
    When the customer opens the "reviews" product tab
    Then the "reviews" tab is selected and the panel content has changed
    When the customer opens the "shipping" product tab
    Then the "shipping" tab is selected and the panel content has changed
