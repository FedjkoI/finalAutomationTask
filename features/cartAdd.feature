Feature: Add to Cart

  @Test3
  Scenario: User is able to add product in a cart and it will show correct quantity
    Given I am on the home page
    And I press on Women button
    And I press on "Sleve T-shirt"
    And I choose blue color
    And I press add to cart
    When Pop-up appears I press "Proceed to checkout"
    And I see one Product in Cart
    And I press Plus button to add second product
    Then Cart will increase on 1 Product as well



    
    
    
