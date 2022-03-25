import LoginPage from '../../support/Pages/LoginPage/LoginPage';
import HomePage from '../../support/Pages/HomePage/HomePage';

const sizes = ['iphone-6', 'samsung-s10', 'iphone-6-landscape', 'ipad-2']

describe('Mobile Viewport - Login', () => {
    let page;
  
    Cypress.config('scrollBehavior', "center");
  
    beforeEach(() => {
      page = new LoginPage();
      page.visit();
    })
  
    sizes.forEach((size) => {
        it(`Do login with size ${size} screen`, function() {

        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
        } else {
            if(size != 'iphone-6-landscape') {
              cy.viewport(size)
            } else {
              cy.viewport('iphone-6', 'landscape')
            }
        }

        page.getCookieButton().click();
        page.getEmailInput().type(Cypress.env('USER_EMAIL'));
        page.getPasswordInput().type(Cypress.env('USER_PASSWORD'));
        page.getLoginButton().click();
    
        page = new HomePage();
        page.getWelcomeBackMessage().should('exist')
        });
    });
});