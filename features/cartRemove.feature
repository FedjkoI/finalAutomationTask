Feature: Remove from Cart

  @Test4
  Scenario: User is able to remove items from cart and its show correct quantity
    Given I am on the home page
    And I press on Women button
    And I press on "Sleve T-shirt"
    And I choose blue color
    And I press add to cart
    # And I see a message <message>
    When Pop-up appears I press "Proceed to checkout"
    And I see one Product in Cart
    And I add <number> quantity to the Cart
    And I press + button
    Then Cart will contains 6 Products
    And I press "-" button to delete 1 quantity
    Then Cart will contain 5 Products


    Examples: 
      | number   |
      | "5"      |
