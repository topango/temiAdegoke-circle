/// <reference types="cypress" />
import { Given, When, Then, And, } from "cypress-cucumber-preprocessor/steps";
import HOMEPAGE from "../../../pageObject/homePage";
import CONSULTANTPAGE from "../../../pageObject/consultantPage";
import BOOKINGPAGE from "../../../pageObject/bookingPage";

const bookingPage = new BOOKINGPAGE();
const homePage = new HOMEPAGE();
const consultantPage = new CONSULTANTPAGE();


Given('Patient navigate to the circle website wanting a knee replacement', () => {
    cy.NavigateToHomepage();
});



When(`Patient enters their location and date of leave`, () => {
   homePage.findSpecialistButton().eq(1).click();
   cy.wait(1000)
   consultantPage.treatmentField().click({ force: true }).type('Knee replacement surgery');
   consultantPage.postCodeField().click({ force: true }).type('Enfield UK');
   consultantPage.searchButton().click();
   cy.wait(1000)
   cy.contains('Mr Sanjay Sinha').should('be.visible');
   cy.wait(1000)
   consultantPage.bookOnlineButton().eq(16).click();
   cy.contains('Book an appointment with Mr Sanjay Sinha').should('be.visible');
   cy.wait(1000)
   bookingPage.selectHospitalDropdown().select('Kings Oak Hospital');
   cy.wait(1000)
   bookingPage.dateChosen().click();
   cy.wait(3000)
   bookingPage.timeChosen().click();
   bookingPage.nextButton().click(); 
});

Then(`Patient is able to get a consultant availability and location provided to make decision`, () => {
   cy.get('.consultant').should('be.visible');

});



























