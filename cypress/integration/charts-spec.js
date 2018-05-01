describe('Charts', () => {
    it('Load the page, navigate to charts', () => {
        cy.visit('http://localhost:5000');

        cy.get('a')
        .contains('Random Charts')
        .click();
    });

    it('Should have 11 charts', () => {
        cy.get('[data-cy="chart"')
        .should('have.lengthOf', 11);
    });

});
