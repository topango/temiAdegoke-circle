/// <reference types="cypress" />

class CONSULTANTPAGE {

   
    treatmentField() {
        return cy.get('#treatment');

    }

    postCodeField() {
        return cy.get('#LocationDistanceLocation');

    }

    searchButton() {
        return cy.get('.f-btn.f-btn-xlarge.f-btn-primary');

    }

    bookOnlineButton() {
        return cy.get('a.f-btn.f-btn-large.f-btn-secondary.f-width-1-1.f-btn--no-shadow');

    }


   


}
export default CONSULTANTPAGE;