module.exports = function () {
    this.When('I click on Developer Guide', () =>
        browser.click("/html/body/nav/ul/li[3]/a")
    );

    this.When('I click on menu Testrunner', () =>
        browser.click("/html/body/section/div/section/nav/h3[3]/a")
    );

    this.When('I click on menu frameworks', () =>
        clickOn_frameworkPage()
    );

    this.When('I click on menu timeouts', () =>
        clickOn_timeoutsPage()
    );
}


function clickOn_frameworkPage() {
    browser.waitForVisible("/html/body/section/div/section/nav/div[3]/a[3]");
    browser.click("/html/body/section/div/section/nav/div[3]/a[3]")
}

function clickOn_timeoutsPage() {
    browser.waitForVisible("/html/body/section/div/section/nav/div[3]/a[3]");
    browser.click("/html/body/section/div/section/nav/div[3]/a[6]")
}
