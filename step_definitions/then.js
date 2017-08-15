module.exports = function () {
    this.Then('I see the frameworks page', () =>
        browser.waitForExist("#Frameworks", 2000)
    );

    this.Then('I see the timeouts page', () =>
        browser.waitForExist("#Timeouts", 2000)
    );
}
