describe('Nav Bar', () => {
    it('Load the page', () => {
        cy.visit('http://localhost:5000');
    });

    it('Has a navbar with links to home and charts', () => {
        cy.get('a')
        .contains('Home')
        .should('have.attr', 'href', '/');

        cy.get('a')
        .contains('Random Charts')
        .should('have.attr', 'href', '/charts');
    });

    it('Only shows search input from home page', () => {
        cy.get('[data-cy="search"')
        .should('exist');

        cy.get('a')
        .contains('Random Charts')
        .click();

        cy.get('[data-cy="search"')
        .should('not.exist');

        cy.get('a')
        .contains('MHW Field Guide')
        .should('exist');
    });

});