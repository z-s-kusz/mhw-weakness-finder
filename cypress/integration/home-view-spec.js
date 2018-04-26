describe('Home Page', () => {
    it('Load the page', () => {
        cy.visit('http://localhost:5000');
    });

    it('Check for jumbotron title', () => {
        cy.get('h1.jumbo-title')
        .should('exist');
    });

});
