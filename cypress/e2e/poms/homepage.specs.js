class MusalaHomepage {
    homepageElements = {
        // First test cases locators
        contactUs: () => cy.get('.fancybox'),
        form: () => cy.get('#contact_form_pop'),
        nameInput: () => cy.get('[name="your-name"]'),
        emailInput: () => cy.get('[name="your-email"]'),
        mobileInput: () => cy.get('[name="mobile-number"]'),
        subjectInput: () => cy.get('[name="your-subject"]'),
        messageInput: () => cy.get('[name="your-message"]'),
        sendButton: () => cy.getByRole('button', { name: /send/i }),
        emailErrorMessage: () => cy.get('.wpcf7-not-valid-tip'),
        // Second test case locator
        companyItemHeader: () => cy.get('#menu-main-nav-1 > .menu-item-887 > .main-link'),
        // Third test case locator
        careersItemHeader: () => cy.get('#menu-main-nav-1 > .menu-item-478 > .main-link'),
    };
    clickContactUs() {
        this.homepageElements.contactUs().click();
    }
    typeFullName(fullName) {
        this.homepageElements.nameInput().type(fullName);
    }
    typeEmail(firstName) {
        this.homepageElements.emailInput().type(firstName);
    }
    typeMobile(mobile) {
        this.homepageElements.mobileInput().type(mobile);
    }
    typeSubject(subject) {
        this.homepageElements.subjectInput().type(subject);
    }
    typeMessage(message) {
        this.homepageElements.messageInput().type(message);
    }
    clickSendButton() {
        this.homepageElements.sendButton().click();
    }
    clickOnCompany() {
        this.homepageElements.companyItemHeader().click({ force: true });
    }
    clickOnCareers() {
        this.homepageElements.careersItemHeader().click({ force: true });
    }
}
module.exports = new MusalaHomepage();
