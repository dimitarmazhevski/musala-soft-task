class Company {
    companyElements = {
        leadership: () => cy.get('.company-members'),
        facebookIcon: () => cy.xpath('/html/body/footer/div/div/a[4]'),
    };
    clickFacebookIcon() {
        this.companyElements.facebookIcon().click();
    }
}
module.exports = new Company();
