module.exports = function () {
    this.When('I click on Developer Guide', () =>
        browser.click("/html/body/nav/ul/li[3]/a")
    )};
