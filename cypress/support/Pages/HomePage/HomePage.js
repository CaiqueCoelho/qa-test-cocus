import BasePage from '../BasePage/BasePage';
import { WELCOME_BACK_MESSAGE_BY_TEXT } from './HomePageSelectors';

export default class HomePage extends BasePage {
    getWelcomeBackMessage = () => cy.contains(WELCOME_BACK_MESSAGE_BY_TEXT);
}