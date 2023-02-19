class Careers {
    careersElements = {
        openPositions: () => cy.get('.contact-label > span'),
        selectLocation: () => cy.get('#get_location'),
        openPositionQA: () => cy.xpath('//*[@id="content"]/section/div[2]/article[9]/div/a/div'),
        mainSection: () => cy.get('.entry-content'),
        applyBtn: () => cy.get('.fancybox > .wpcf7-form-control'),
        // Form locators
        uploadCV: () => cy.get('[name="upload-cv"]'),
        nameField: () => cy.get('[name="your-name"]'),
        emailField: () => cy.get('[name="your-email"]'),
        mobileField: () => cy.get('[name="mobile-number"]'),
        sendBtn: () => cy.findByRole('button', { name: /send/i }),
        form: () => cy.get('.popup_form'),
    };
    clickOpenPositionsBtn() {
        this.careersElements.openPositions().click();
    }
    clickOnQAposition() {
        this.careersElements.openPositionQA().click();
    }
    clickOnApplyBtn() {
        this.careersElements.applyBtn().click();
    }
    typeName(fullName) {
        this.careersElements.nameField().type(fullName);
    }
    typeEmail(email) {
        this.careersElements.emailField().type(email);
    }
    typeMobile(mobile) {
        this.careersElements.mobileField().type(mobile);
    }
    clickSendBtn() {
        this.careersElements.sendBtn().click({ force: true });
    }
}
module.exports = new Careers();
