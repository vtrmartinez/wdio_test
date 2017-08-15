Feature: WebdriverIO WebSite
  As an internet user
  I want open the WebdriverIO WebSite
  To learn more about webdriverio

  Scenario: Verify the framework page
    Given I open the webdriverio WebSite
    When I click on Developer Guide
    And I click on menu Testrunner
    And I click on menu frameworks
    Then I see the frameworks page

  Scenario: Verify the Timeouts page
    Given I open the webdriverio WebSite
    When I click on Developer Guide
    And I click on menu Testrunner
    And I click on menu timeouts
    Then I see the timeouts page
