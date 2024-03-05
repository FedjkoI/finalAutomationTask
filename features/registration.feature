Feature: Registration
  @Test1
  Scenario: User can not proseed with checkout without registration
    Given I am on the home page
    And I press on Women button
    And I press on "Sleve T-shirt"
    # REVIEW: How do you know that selected product with blue color is in stock/available?
    And I choose blue color
    And I press add to cart
    When Pop-up appears I press "Proceed to checkout"
    Then I press Proceed to checkout
    And I <visibility> see Sign In buttons appears
    



    @positive
    Examples: 
      | visibility |
      | do         |

    

    
