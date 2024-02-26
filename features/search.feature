Feature: Search field

  @wip
  Scenario: User is able to search a product using the search box
    Given I am on the home page
    When I enter <word> into search field
    And I click search button
    Then Page appears only with products containing text <word>

    
    Examples: 
      | word     | visibility| message|
      | "Blouse" | do        |"Blouse"|

    
