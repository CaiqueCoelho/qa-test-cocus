import LoginPage from '../../support/Pages/LoginPage/LoginPage';
import HomePage from '../../support/Pages/HomePage/HomePage';

const sizes = ['iphone-6', 'samsung-s10', 'iphone-6-landscape', 'ipad-2']

describe('Desktop Viewport - Login', () => {
    let page;
  
    // Cypress.config('scrollBehavior', false);
  
    beforeEach(() => {
      page = new LoginPage();
      page.visit();
    })
  
    sizes.forEach((size) => {
        it(`Do login with size ${size} screen`, function() {
        cy.checkAccessibility(true);
        page.getCookieButton().click();
        page.getEmailInput().type(Cypress.env('USER_EMAIL'));
        page.getPasswordInput().type(Cypress.env('USER_PASSWORD'));
        page.getLoginButton().click();
    
        page = new HomePage();
        page.getWelcomeBackMessage().should('exist')
        });
    });
});