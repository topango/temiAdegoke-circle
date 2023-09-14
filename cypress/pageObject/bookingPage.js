/// <reference types="cypress" />

class BOOKINGPAGE {

    selectHospitalDropdown() {
        return cy.get('#location-hospital-select');

    }

    dateChosen() {
        return cy.get('.row-from-end-4 > .vc-weeks > .id-2023-09-27 > .vc-day-content');

    }

    timeChosen() {
        return cy.get("[data-id='10:15']");

    }

    nextButton() {
        return cy.get('.date-time > .next-btn > .f-btn');

    }

    

}
export default BOOKINGPAGE;