import LoginPage from '../../support/Pages/LoginPage/LoginPage';
import { H3_TEXT, FEEDBACK_ERROR_TEXT } from '../../support/Pages/LoginPage/constants'

describe('Desktop Viewport - Homepage', () => {
  let page;

  before(() => {
    page = new LoginPage();
    page.visit();
  })

  it.only('Do login', () => {
    cy.checkAccessibility(true);
    page.getEmailInput().type(Cypress.env('USER_EMAIL'));
    page.getPasswordInput().type(Cypress.env('USER_PASSWORD'));
    page.getLoginButton().click();
  });

  it.only('Try to log in with invalid user', () => {
    page.getEmailInput().type("user@phptravels.com");
    page.getPasswordInput().type("demo");
    page.getLoginButton();

    page.getFeedbackError().should('exists');
    cy.checkAccessibility(true);
  });
});