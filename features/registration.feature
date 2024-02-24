Feature: Registration

  Scenario: User can not proseed with checkout without registration
    Given I am on the home page
    And I press on Women button
    And I press on "Sleve T-shirt"
    And I choose blue color
    And I press add to cart
    When Pop-up appears I press "Proceed to checkout"
    And I press "Proceed to checkout"
    Then Sign in button appears
    And I press Čreate account"button
    
