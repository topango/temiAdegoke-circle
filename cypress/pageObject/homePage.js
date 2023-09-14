/// <reference types="cypress" />

class HOMEPAGE {

    logo() {
        return cy.get('a.PrimaryNavigation__logo');

    }

    findSpecialistButton() {
        return cy.get('span.HeroBanner__cta-text');

    }

    
    


}
export default HOMEPAGE;