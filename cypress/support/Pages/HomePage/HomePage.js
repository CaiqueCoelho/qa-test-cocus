import BasePage from '../BasePage/BasePage';
import { WELCOME_BACK_MESSAGE_BY_TEXT } from './HomePageSelectors';

export default class HomePage extends BasePage {

    visit = () => cy.visit('/', { failOnStatusCode: false, retryOnStatusCodeFailure: true, });

    getWelcomeBackMessage = () => cy.contains(WELCOME_BACK_MESSAGE_BY_TEXT);
}