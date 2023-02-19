import MusalaHomepage, { homepageElements } from './poms/homepage.specs';
import Global from './poms/global.specs';
import Careers, { careersElements } from './poms/careers.specs';

const wrongEmail = 'wrong@email';
const wrongMobile = 'wrong mobile';
const errorNameMessage = 'The field is required.';
const errorEmailMessage = 'The e-mail address entered is invalid.';
const errorMobileMessage = 'The telephone number is invalid.';
describe('test case three', () => {
    before(() => {
        cy.visit('/');
        // Accepts the cookies popup
        Global.acceptCookies();
    });
    it('test case three', () => {
        // Clicks on a careers in the header
        MusalaHomepage.clickOnCareers();

        // Clicks on open positions button in the first component
        Careers.clickOpenPositionsBtn();

        // Checks if its the correct URL
        cy.url().should('eq', Cypress.config().baseUrl + 'careers/join-us/');
        careersElements.selectLocation().select('All Locations');

        // Clicks on the QA Automation position
        Careers.clickOnQAposition();

        // Assertion if the main section is visible
        careersElements.mainSection().should('be.visible');
        careersElements
            .mainSection()
            .contains(
                'General description' && 'Requirements' && 'Responsibilities' && 'What we offer'
            )
            .should('be.visible');

        // Checks if the apply button is visible
        careersElements.applyBtn().should('be.visible');

        // Clicks apply button
        Careers.clickOnApplyBtn();
        Careers.typeEmail(wrongEmail);
        Careers.typeMobile(wrongMobile);
        // Uploads a CV
        careersElements.uploadCV().selectFile('cypress/fixtures/RandomCV.pdf');
        Careers.clickSendBtn();
        careersElements
            .form()
            .should('contain.text', errorNameMessage && errorEmailMessage && errorMobileMessage);
    });
});
