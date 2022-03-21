import LoginPage from '../../support/Pages/LoginPage/LoginPage';
import HomePage from '../../support/Pages/HomePage/HomePage';

describe('Desktop Viewport - Login', () => {
  let page;

  Cypress.config('scrollBehavior', false);

  beforeEach(() => {
    page = new LoginPage();
    page.visit();
  })

  it('Do login', () => {
    cy.checkAccessibility(true);
    page.getCookieButton().click();
    page.getEmailInput().type(Cypress.env('USER_EMAIL'));
    page.getPasswordInput().type(Cypress.env('USER_PASSWORD'));
    page.getLoginButton().click();

    page = new HomePage();
    page.getWelcomeBackMessage().should('exist')
  });

  it('Try to log in with invalid user', () => {
    page.getEmailInput().type("user@phptravels.com");
    page.getPasswordInput().type("demo");
    page.getLoginButton().click();

    page.getFeedbackErrorInavalidCredential().should('exist');
    cy.checkAccessibility(true);
  });

  it('Try to log in with empty e-mail', () => {
    page.getLoginButton().click();

    page.checkIfEmailIsFocused();
    cy.checkAccessibility(true);
  });
});