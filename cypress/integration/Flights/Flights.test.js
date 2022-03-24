import FlightPage from '../../support/Pages/FlightsPage/FlightsPage';
import {
  CITY_FROM,
  CITY_TO,
  FLY_FROM_ID,
  FLY_TO_ID,
  SEARCH_FLIGHT_TEXT,
  DEPARTURE_DATE_ID
} from '../../support/Pages/FlightsPage/constants';
import { BANK_TRANSFER_ID } from '../../support/Pages/BookingPage/constants';
import LoginPage from '../../support/Pages/LoginPage/LoginPage';
import BookingPage from '../../support/Pages/BookingPage/BookingPage';
import InvoicePage from '../../support/Pages/InvoicePage/InvoicePage';

describe('Desktop Viewport - Flights', () => {
  let page;

  beforeEach( function() {
    page = new LoginPage();
    page.visit();
    page.getCookieButton().click({scrollBehavior:false});
    page.getEmailInput().type(Cypress.env('USER_EMAIL'), {scrollBehavior:false});
    page.getPasswordInput().type(Cypress.env('USER_PASSWORD'), {scrollBehavior:false});
    page.getLoginButton().click({scrollBehavior:false});
    page = new FlightPage();
    page.visit();

    cy.fixture('adult_user').then((user) => {
      this.user = user
    })
  })

  it.only('Search One Way for 1 Adult', function() {
    cy.checkAccessibility(true);
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});

    page.getAirportDestinationName().should('exist');
    page.getBookNowButton().click();

    Cypress.config('scrollBehavior', 'center')

    page = new BookingPage();
    cy.checkAccessibility(true);
    page.getFirstNameInput().type(this.user.first_name, {scrollBehavior:'center'});
    page.getLastNameInput().type(this.user.last_name);
    page.getNationalityInput().select(this.user.nationality);
    page.getMonthOfBirthInput().select(this.user.month_of_birth);
    page.getDayOfBirthInput().select(this.user.day_of_birth);
    page.getYearOfBirthInput().select(this.user.year_of_birth);
    page.getMonthOfPassaportIssuanceInput().select(this.user.passport_issuance_month);
    page.getDayOfPassaportIssuanceInput().select(this.user.passport_issuance_day);
    page.getYearOfPassaportIssuanceInput().select(this.user.passport_issuance_year);
    page.getMonthOfPassaportExpiryInput().select(this.user.passport_expiry_month);
    page.getDayPassaportExpiryInput().select(this.user.passport_expiry_day);
    page.getYearPassaportExpiryInput().select(this.user.passport_expiry_year);
    page.getDocNumberInput().type(this.user.doc_number);
    page.getPayLaterOption().click();
    page.getAgreeTermsCheckbox().check({force: true});
    page.getConfirmBookingButton().click();

    page = new InvoicePage();
    cy.checkAccessibility(true);
    page.getTitlePage().should('be.visible')
    page.getReservationNumberTitle().should('be.visible')
    page.getFeedbackTitle().should('be.visible')
    page.getUserNameTitle(this.user.first_name).should('be.visible')
    page.getFeedbackBookingTitle().should('be.visible')
    page.getTravelersDetailsCard().should('contain', this.user.first_name)
    page.getTravelersDetailsCard().should('contain', this.user.last_name)
    page.getTravelersDetailsCard().should('contain', this.user.nationality_ab)
    page.getTravelersDetailsCard().should('contain', this.user.doc_number)
    page.getTravelersDetailsCard().should('contain', CITY_TO)
  });

  it('Search Round Trip for 1 Adult', function() {
    page.getRoundTripOption().click({scrollBehavior:false})
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});

    page.getAirportDestinationName().should('exist');
    page.getBookNowButton().click();

    Cypress.config('scrollBehavior', 'center')

    page = new BookingPage();
    page.getFirstNameInput().type(this.user.first_name, {scrollBehavior:'center'});
    page.getLastNameInput().type(this.user.last_name);
    page.getNationalityInput().select(this.user.nationality);
    page.getMonthOfBirthInput().select(this.user.month_of_birth);
    page.getDayOfBirthInput().select(this.user.day_of_birth);
    page.getYearOfBirthInput().select(this.user.year_of_birth);
    page.getMonthOfPassaportIssuanceInput().select(this.user.passport_issuance_month);
    page.getDayOfPassaportIssuanceInput().select(this.user.passport_issuance_day);
    page.getYearOfPassaportIssuanceInput().select(this.user.passport_issuance_year);
    page.getMonthOfPassaportExpiryInput().select(this.user.passport_expiry_month);
    page.getDayPassaportExpiryInput().select(this.user.passport_expiry_day);
    page.getYearPassaportExpiryInput().select(this.user.passport_expiry_year);
    page.getDocNumberInput().type(this.user.doc_number);
    page.getPayLaterOption().click();
    page.getAgreeTermsCheckbox().check({force: true});
    page.getConfirmBookingButton().click();

    page = new InvoicePage();

    page.getTitlePage().should('be.visible')
    page.getReservationNumberTitle().should('be.visible')
    page.getFeedbackTitle().should('be.visible')
    page.getUserNameTitle(this.user.first_name).should('be.visible')
    page.getFeedbackBookingTitle().should('be.visible')
    page.getTravelersDetailsCard().should('contain', this.user.first_name)
    page.getTravelersDetailsCard().should('contain', this.user.last_name)
    page.getTravelersDetailsCard().should('contain', this.user.nationality_ab)
    page.getTravelersDetailsCard().should('contain', this.user.doc_number)
    page.getTravelersDetailsCard().should('contain', CITY_TO)
  });

  it('Search One Way for 2 Adults', function() {
    cy.checkAccessibility(true);
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getCountPassengers().click({scrollBehavior:false});
    page.getPlusAdult().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});

    page.getAirportDestinationName().should('exist');
    page.getBookNowButton().click();

    Cypress.config('scrollBehavior', 'center')

    page = new BookingPage();
    page.getFirstNameInput().should('exist')
    page.getTitleNameTravelerNInput(2).should('exist')
  });

  it('Search Booking Without Origin', function() {
    page.getSearchButton().click({scrollBehavior:false});
    page.getLoadIcon().should('be.visible');
    page.getLoadIcon().should('not.be.visible');
    cy.contains(SEARCH_FLIGHT_TEXT).should('be.visible');
    cy.focused().should('have.attr', 'id', FLY_FROM_ID)
  });

  it('Search Booking Without Destination', function() {
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});
    page.getLoadIcon().should('be.visible');
    page.getLoadIcon().should('not.be.visible');
    cy.contains(SEARCH_FLIGHT_TEXT).should('be.visible');
    cy.focused().should('have.attr', 'id', FLY_TO_ID)
  });

  it('Search Booking Without Departure Date', function() {
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getDepartureDateInput().clear({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});
    page.getLoadIcon().should('be.visible');
    page.getLoadIcon().should('not.be.visible');
    cy.contains(SEARCH_FLIGHT_TEXT).should('be.visible');
    cy.focused().should('have.attr', 'id', DEPARTURE_DATE_ID)
  });

  it('Search Booking Without People', function() {
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getCountPassengers().click({scrollBehavior:false});
    page.getMinusAdult().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});
    cy.contains(SEARCH_FLIGHT_TEXT).should('be.visible');
    page.getBookNowButton().should('not.exist')
  });

  it('Try to book a flight without travelers detail', function() {
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});

    page.getAirportDestinationName().should('exist');
    page.getBookNowButton().click();

    Cypress.config('scrollBehavior', 'center')

    page = new BookingPage();
    page.getPayLaterOption().click();
    page.getAgreeTermsCheckbox().check({force: true});
    page.getConfirmBookingButton().click();
    cy.url().should('not.contain', '/invoice')
  });

  it('Try to book a flight without select payment method', function() {
    page.getFlyFromInput().type(CITY_FROM, {scrollBehavior:false});
    page.getFlyOption().click({scrollBehavior:false});
    page.getFlyToInput().type(CITY_TO, {scrollBehavior:false})
    page.getFlyOption().click({scrollBehavior:false});
    page.getSearchButton().click({scrollBehavior:false});

    page.getAirportDestinationName().should('exist');
    page.getBookNowButton().click();

    Cypress.config('scrollBehavior', 'center')

    page = new BookingPage();
    page.getFirstNameInput().type(this.user.first_name, {scrollBehavior:'center'});
    page.getLastNameInput().type(this.user.last_name);
    page.getNationalityInput().select(this.user.nationality);
    page.getMonthOfBirthInput().select(this.user.month_of_birth);
    page.getDayOfBirthInput().select(this.user.day_of_birth);
    page.getYearOfBirthInput().select(this.user.year_of_birth);
    page.getMonthOfPassaportIssuanceInput().select(this.user.passport_issuance_month);
    page.getDayOfPassaportIssuanceInput().select(this.user.passport_issuance_day);
    page.getYearOfPassaportIssuanceInput().select(this.user.passport_issuance_year);
    page.getMonthOfPassaportExpiryInput().select(this.user.passport_expiry_month);
    page.getDayPassaportExpiryInput().select(this.user.passport_expiry_day);
    page.getYearPassaportExpiryInput().select(this.user.passport_expiry_year);
    page.getDocNumberInput().type(this.user.doc_number);
    page.getAgreeTermsCheckbox().check({force: true});
    page.getConfirmBookingButton().click();
    cy.url().should('not.contain', '/invoice')
    cy.focused().should('have.attr', 'id', BANK_TRANSFER_ID)
  });

});