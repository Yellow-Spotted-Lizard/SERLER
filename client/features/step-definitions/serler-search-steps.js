const expect = require('chai').expect; module.exports = function () {
    this.When(/^I search Google for "([^"]*)"$/, (text) => {
        return helpers.loadPage('https://google.com')
            .then(() => {
                return page.serlerSearch.performSearch(text)
            })
    })
    this.Then(/^I should see "([^"]*)" in the result$/, function (keywords) {
        return
        driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
    });
    this.When(/^I enter "([^"]*)" in input$/, function (expression) {
        console.log("expression is ", expression);
        return helpers.loadPage('https://google.com').then(e => {
            return page.serlerSearch.performSearch(expression)
        })
    })
    this.Then(/^I get "([^"])*" in the result$/, function (res) {
        return driver.wait(until.elementsLocated(by.id('cwos')), 10000).then(() => {
            driver.findElement(by.id('cwos')).getText().then(t => {
                try {
                    expect(t).to.be.eql("2")
                } catch (e) { return Promise.reject(false) }
            })
        })
    })
};