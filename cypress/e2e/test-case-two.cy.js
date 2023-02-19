import MusalaHomepage, { homepageElements } from './poms/homepage.specs';
import Global from './poms/global.specs';
import Company, { companyElements } from './poms/company.specs';

const facebookHref = 'https://www.facebook.com/MusalaSoft?fref=ts';
describe('test case two', () => {
    before(() => {
        cy.visit('/');
        // Accepts the cookies pop up
        Global.acceptCookies();
    });
    it('test case two', () => {
        // Clicks on company item from the header
        MusalaHomepage.clickOnCompany();
        // Assertion for the URL
        cy.url().should('eq', Cypress.config().baseUrl + 'company/');
        // Checking if leadership is visible
        Company.companyElements.leadership().should('be.visible');
        // Checking if the facebook logo has the correct href
        companyElements.facebookIcon().should('have.attr', 'href', facebookHref);

        // companyElements.facebookIcon().invoke('removeAttr', 'target', '_blank').click();
        /* I couldn't preform the click because cypress does not allow multiple tabs, therefore I tried some workaround 
        with the code above, but that too didn't work out, so I left the task here to end. We can talk about this
        more during the technical interview */
    });
});
