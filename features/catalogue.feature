Feature: Nova Shop catalogue

  @NS-003 @positive @smoke
  Scenario: Authenticated customer can search for a product by its displayed name
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer searches for the name of the first displayed product
    Then exactly one product is listed and it shows that name

  @NS-004 @positive @smoke
  Scenario: Category selection returns products only from that category
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer selects the category "Home"
    Then every listed product belongs to the "Home" category

  @NS-005 @positive @smoke
  Scenario: In-stock filter removes the unavailable catalogue item
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer enables the in-stock filter
    Then no sold-out products are listed
    And at least one product is still listed

  @NS-006 @positive @smoke
  Scenario: Price ascending sort orders displayed products from lowest to highest
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer sorts products by "Price (low to high)"
    Then the listed prices are in ascending order

  @NS-007 @positive @regression
  Scenario: Rating sorting puts the highest current rating first
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer sorts products by "Top rated"
    Then the first listed product has the highest rating

  @NS-025 @negative
  Scenario: Search with no match shows no product results
    Given the customer is logged in
    And the customer opens the product catalogue
    When the customer searches for a product that does not exist
    Then no product cards are listed
    And a no-results message is displayed

  @NS-027 @negative
  Scenario: Sold-out catalogue item cannot be added to the cart
    Given the customer is logged in
    And the customer opens the product catalogue
    Then exactly one sold-out product is listed
    And its sold out button is disabled
