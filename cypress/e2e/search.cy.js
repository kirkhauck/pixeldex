describe('Search Bar', () => {
  beforeEach('intercept and stub homepage', () => {
    cy.loadPage();
  });

  it('should have the input\'s value update with user typing', () => {
    cy.get('input')
      .should('have.value', '')
      .type('Pikachu')
      .should('have.value', 'Pikachu');
  });

  it('should show a message if user submits an empty search', () => {
    cy.get('.search-button').click();
    
    cy.get('form')
    .contains('p', 'Please enter a Pokemon\'s name. It\'s super effective!')
  });
  
  it('should have the message disappear if the user types', () => {
    cy.get('.search-button').click()
      .get('input').type('Bulbasaur');

    cy.get('form')
      .children('p').should('not.exist');
  });
});