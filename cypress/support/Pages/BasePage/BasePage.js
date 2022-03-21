import { COOKIE_BUTTON_BY_ID } from './BasePageSelectors';

export default class BasePage {
    
    getCookieButton = () => cy.get(COOKIE_BUTTON_BY_ID);
}