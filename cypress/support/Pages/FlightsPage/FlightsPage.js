import {
    FLY_FROM_INPUT_BY_ID,
    FLY_TO_BY_INPUT_ID,
    FLY_OPTIONS_BY_CLASS,
    FLY_DEPARTURE_DATE_INPUT_BY_ID,
    SEARCH_BUTTON_BY_ID,
    BOOK_NOW_BUTTON_BY_TYPE,
    AIRPORT_NAME_BY_CLASS,
    PASSENGERS_COUNT_BY_CLASS,
    PASSENGERS_COUNT_PLUS_BY_CLASS,
    PASSENGERS_COUNT_MINUS_BY_CLASS,
    LOAD_BY_CLASS,
    FLY_RETURN_DATE_INPUT_BY_ID,
    ROUND_TRIP_CHECKBOX_BY_FOR
} from './FlightsPageSelectors';

export default class FlightPage {

    visit = () => cy.visit('/flights')

    getFlyFromInput = () => cy.get(FLY_FROM_INPUT_BY_ID);

    getFlyToInput = () => cy.get(FLY_TO_BY_INPUT_ID);
    
    getFlyOption = () => cy.get(FLY_OPTIONS_BY_CLASS);

    getDepartureDateInput = () => cy.get(FLY_DEPARTURE_DATE_INPUT_BY_ID);

    getReturnDateInput = () => cy.get(FLY_RETURN_DATE_INPUT_BY_ID);

    getSearchButton = () => cy.get(SEARCH_BUTTON_BY_ID);

    getBookNowButton = () => cy.get(BOOK_NOW_BUTTON_BY_TYPE).eq(0);

    getAirportDestinationName = () => cy.get(AIRPORT_NAME_BY_CLASS);

    getCountPassengers = () => cy.get(PASSENGERS_COUNT_BY_CLASS).eq(3);

    getPlusAdult = () => cy.get(PASSENGERS_COUNT_PLUS_BY_CLASS).eq(0)

    getPlusChild = () => cy.get(PASSENGERS_COUNT_PLUS_BY_CLASS).eq(1)

    getPlusInfant = () => cy.get(PASSENGERS_COUNT_PLUS_BY_CLASS).eq(2)

    getMinusAdult = () => cy.get(PASSENGERS_COUNT_MINUS_BY_CLASS).eq(0)

    getMinusChild = () => cy.get(PASSENGERS_COUNT_MINUS_BY_CLASS).eq(1)

    getMinusInfant = () => cy.get(PASSENGERS_COUNT_MINUS_BY_CLASS).eq(2)

    getLoadIcon = () => cy.get(LOAD_BY_CLASS);

    getRoundTripOption = () => cy.get(ROUND_TRIP_CHECKBOX_BY_FOR);
}
