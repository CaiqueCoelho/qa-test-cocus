import { 
    EMAIL_INPUT_BY_TYPE,
    PASSWORD_INPUT_BY_TYPE,
    REMEMBER_CHECKBOX_BY_ID,
    LOGIN_BUTTON_BY_TYPE,
    FEEDBACK_ERROR_BY_TEXT,
} from './LoginPageSelectors';
import BasePage from '../BasePage/BasePage';
  
export default class LoginPage extends BasePage {

    visit = () => cy.visit('/login')

    getEmailInput = () => cy.get(EMAIL_INPUT_BY_TYPE);

    getPasswordInput = () => cy.get(PASSWORD_INPUT_BY_TYPE);

    getLoginButton = () => cy.get(LOGIN_BUTTON_BY_TYPE);

    getFeedbackError = () => cy.contains(FEEDBACK_ERROR_BY_TEXT);

    getRememberButton = () => cy.get(REMEMBER_CHECKBOX_BY_ID)
}