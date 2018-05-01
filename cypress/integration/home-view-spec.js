describe('Home Page', () => {
    it('Load the page', () => {
        cy.visit('http://localhost:5000');
    });

    // check for viewport size, should'nt appear in mobile
    it('Check for jumbotron title', () => {
        cy.get('h1.jumbo-title')
        .should('exist');
    });

    it('Show all monsters when no search is entered', () => {
        cy.get('[data-cy="monsterListItem"')
        .should('have.lengthOf', 31);
    });

    it('Do a partial text search for dodogama', () => {
        cy.get('[data-cy="search"')
        .type('dod');

        cy.get('[data-cy="monsterListItem"')
        .contains('Dodogama')
        .should('exist');

        cy.get('[data-cy="monsterListItem"')
        .contains('Anjanath')
        .should('not.exist');
    });

    it('Clear search to show all monsters', () => {
        cy.get('[data-cy="search"')
        .type('dod');

        cy.get('button')
        .contains('Clear')
        .click();

        cy.get('[data-cy="monsterListItem"')
        .should('have.lengthOf', 31);
    });

});
