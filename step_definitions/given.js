module.exports = function () {
    this.Given('I open the webdriverio WebSite', () =>
        browser.url('http://webdriver.io/')
    )};
