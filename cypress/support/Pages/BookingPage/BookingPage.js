import {
    TITLE_NAME_INPUT_BY_NAME,
    FIRST_NAME_INPUT_BY_NAME,
    LAST_NAME_INPUT_BY_NAME,
    NATIONALITY_INPUT_BY_NAME,
    MONTH_OF_BIRTH_INPUT_BY_NAME,
    DAY_OF_BIRTH_INPUT_BY_NAME,
    YEAR_OF_BIRTH_INPUT_BY_NAME,
    MONTH_PASSAPORT_ISSUANCE_INPUT_BY_NAME,
    DAY_PASSAPORT_ISSUANCE_INPUT_BY_NAME,
    YEAR_PASSAPORT_ISSUANCE_INPUT_BY_NAME,
    MONTH_PASSAPORT_EXPIRY_INPUT_BY_NAME,
    DAY_OF_PASSAPORT_EXPIRY_INPUT_BY_NAME,
    YEAR_OF_PASSAPORT_EXPIRY_INPUT_BY_NAME,
    DOC_NUMBER_INPUT_BY_NAME,
    PAY_LATER_BY_OPTION_BY_ALT,
    AGREE_TERMS_CHECKBOX_BY_CLASS,
    CONFIRM_BOOKING_BUTTON_ID,
    BANK_TRANSFER_PAYMENT_METHOD_BY_ID,
    ROUND_TRIP_CHECKBOX_BY_FOR
} from './BookingPageSelectors';

export default class BookingPage {

    getTitleNameInput = () => cy.get(TITLE_NAME_INPUT_BY_NAME)

    getFirstNameInput = () => cy.get(FIRST_NAME_INPUT_BY_NAME)

    getLastNameInput = () => cy.get(LAST_NAME_INPUT_BY_NAME)

    getNationalityInput = () => cy.get(NATIONALITY_INPUT_BY_NAME)

    getMonthOfBirthInput = () => cy.get(MONTH_OF_BIRTH_INPUT_BY_NAME)

    getDayOfBirthInput = () => cy.get(DAY_OF_BIRTH_INPUT_BY_NAME)

    getYearOfBirthInput = () => cy.get(YEAR_OF_BIRTH_INPUT_BY_NAME)

    getMonthOfPassaportIssuanceInput = () => cy.get(MONTH_PASSAPORT_ISSUANCE_INPUT_BY_NAME)

    getDayOfPassaportIssuanceInput = () => cy.get(DAY_PASSAPORT_ISSUANCE_INPUT_BY_NAME)

    getYearOfPassaportIssuanceInput = () => cy.get(YEAR_PASSAPORT_ISSUANCE_INPUT_BY_NAME)

    getMonthOfPassaportExpiryInput = () => cy.get(MONTH_PASSAPORT_EXPIRY_INPUT_BY_NAME)

    getDayPassaportExpiryInput = () => cy.get(DAY_OF_PASSAPORT_EXPIRY_INPUT_BY_NAME)

    getYearPassaportExpiryInput = () => cy.get(YEAR_OF_PASSAPORT_EXPIRY_INPUT_BY_NAME)

    getDocNumberInput = () => cy.get(DOC_NUMBER_INPUT_BY_NAME)

    getPayLaterOption = () => cy.get(PAY_LATER_BY_OPTION_BY_ALT) 

    getAgreeTermsCheckbox = () => cy.get(AGREE_TERMS_CHECKBOX_BY_CLASS)

    getConfirmBookingButton = () => cy.get(CONFIRM_BOOKING_BUTTON_ID)

    getBankTransferPaymentMethod = () => cy.get(BANK_TRANSFER_PAYMENT_METHOD_BY_ID)

    getTitleNameTravelerNInput = (number) => cy.get(`[name="title_${number}"]`)

    getRoundTripOption = () => cy.get(ROUND_TRIP_CHECKBOX_BY_FOR);
}