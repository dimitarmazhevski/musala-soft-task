import MusalaHomepage, { homepageElements } from './poms/homepage.specs';
import Global from './poms/global.specs';

const fullName = 'Dimitar Mazhevski';
const mobile = '075785852';
const subject = 'Test Subject';
const message = 'Hello, this is a message!';
const wrongemails = [
    'wrong@email1',
    'wrong@email2',
    'wrong@email3',
    'wrong@email4',
    'wrong@email5',
];

describe('test case one', () => {
    before(() => {
        cy.visit('/');
        // Accepts cookies pop up
        Global.acceptCookies();
    });
    it('test case one', () => {
        // Clicks on contact us
        MusalaHomepage.clickContactUs();
        // Assertions if the form is visible
        MusalaHomepage.homepageElements.form().should('be.visible');

        MusalaHomepage.typeFullName(fullName);
        MusalaHomepage.typeMobile(mobile);
        MusalaHomepage.typeSubject(subject);
        MusalaHomepage.typeMessage(message);
        // Types the mail 5 times
        for (let i = 0; i < wrongemails.length; i++) {
            MusalaHomepage.typeEmail(wrongemails[i]);
            // Assertion if the error message is show
            MusalaHomepage.homepageElements.emailErrorMessage().should('be.visible');
            // Clears the email field before the next email is typed
            homepageElements.emailInput().clear();
        }
    });
});
