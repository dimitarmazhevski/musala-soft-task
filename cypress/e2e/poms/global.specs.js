class Global {
    globalElments = {
        acceptCookiesBtn: () => cy.get('.wt-cli-accept-all-btn'),
    };
    acceptCookies() {
        this.globalElments.acceptCookiesBtn().click();
    }
}
module.exports = new Global();

// These are global locators used in every test case
