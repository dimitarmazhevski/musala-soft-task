import MusalaHomepage, { homepageElements } from './poms/homepage.specs';
import Global from './poms/global.specs';
import Careers, { careersElements } from './poms/careers.specs';

describe('test case four', () => {
    before(() => {
        cy.visit('/');
        // Accepts cookies pop up
        Global.acceptCookies();
    });
    it('test case four', () => {
        // Click on the 'Careers' link
        MusalaHomepage.clickOnCareers();

        // Click on the 'Check our open positions' button
        Careers.clickOpenPositionsBtn();

        // Filter the available positions by available cities in the dropdown 'Select location'
        careersElements.selectLocation().select('Skopje');

        cy.get('.card').each((positionList) => {
            // Get the city name from the position list header
            const cityName = positionList.find('.card-jobsHot__location').text();
            const position = positionList.find('h2').text();
            const moreInfo = positionList.find('.card-jobsHot__info').text();

            // Prints the city, position and more info to the console
            cy.log(`City: ${cityName}, Position: ${position} , More info: ${moreInfo}`);
        });
    });
});
