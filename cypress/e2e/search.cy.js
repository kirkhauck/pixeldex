describe('Search Bar', () => {
  beforeEach('intercept and stub homepage', () => {
    cy.loadPage();
  });

  it('should show a message if user submits an empty search', () => {
    cy.get('.search-button').click();

    cy.get('form')
      .contains('p', 'Please enter a Pokemon\'s name. It\'s super effective!')
  });
});