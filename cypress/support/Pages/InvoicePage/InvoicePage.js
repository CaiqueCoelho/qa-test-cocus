import {
    BOOKING_INVOICE_TITLE_TEXT,
    RESERVATION_NUMBER_TEXT,
    THANKS_FEEDBACK_TEXT,
    YOUR_BOOKING_FOR_FEEDBACK_TEXT
} from './constants'

import { FORM_CONTENT_BY_CLASS } from './InvoicePageSelectors'

export default class InvoicePage {

    getTitlePage = () => cy.contains('h3', BOOKING_INVOICE_TITLE_TEXT);

    getReservationNumberTitle = () => cy.contains('h3', RESERVATION_NUMBER_TEXT);

    getFeedbackTitle = () => cy.contains('h3', THANKS_FEEDBACK_TEXT);

    getUserNameTitle = (userName) => cy.contains('h3', userName);

    getFeedbackBookingTitle = () => cy.contains('h3', YOUR_BOOKING_FOR_FEEDBACK_TEXT);

    getTravelersDetailsCard = () => cy.get(FORM_CONTENT_BY_CLASS).eq(1);
}