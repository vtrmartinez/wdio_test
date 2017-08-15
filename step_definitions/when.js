module.exports = function () {
    this.When('I click on Developer Guide', () =>
        browser.click("/html/body/nav/ul/li[3]/a")
    );

    this.When('I click on menu Testrunner', () =>
        browser.click("/html/body/section/div/section/nav/h3[3]/a")
    );
}
