Feature: Nova Shop cart

  @NS-012 @positive @regression
  Scenario: Cart quantity changes update the item line total
    Given the customer is logged in
    And the customer opens the detail page for product "p1"
    And the customer notes the product unit price
    And the customer adds the product to the cart
    When the customer opens the cart
    And the customer sets the quantity of "Aurora Wireless Headphones" to 2
    Then the cart line for "Aurora Wireless Headphones" shows quantity 2 and a line total of twice the unit price

  @NS-013 @positive @regression
  Scenario: Removing the last cart item displays an empty cart
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    When the customer opens the cart
    And the customer removes the added product from the cart
    Then the empty cart message is displayed

  @NS-014 @validation @smoke
  Scenario: Customer applies SAVE10 and sees reconciled discount, tax, and total
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the cart
    When the customer applies the coupon "SAVE10"
    Then the coupon status contains "SAVE10 applied"
    And the cart subtotal equals the product price
    And the cart discount is 10 percent of the subtotal and the total reconciles
    And the added product is listed in the cart

  @NS-015 @positive @regression
  Scenario: FLAT20 coupon produces a successful coupon status
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the cart
    When the customer applies the coupon "FLAT20"
    Then the coupon status contains "FLAT20 applied"
    And the cart summary lists the discount "Discount (FLAT20)"

  @NS-026 @negative
  Scenario: Invalid coupon shows an error and preserves the original total
    Given the customer is logged in
    And the customer opens the product catalogue
    And the customer adds the first listed product to the cart
    And the customer opens the cart
    And the customer notes the cart total
    When the customer applies the coupon "NOTREAL"
    Then the coupon status contains "not a valid coupon"
    And the cart total is unchanged
