describe('Search Bar', () => {
  beforeEach('intercept and stub homepage', () => {
    cy.visitHome();
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
      .contains('p', 'Please enter a Pokemon\'s name. It\'s super effective!');
  });
  
  it('should have the message disappear if the user types', () => {
    cy.get('.search-button').click()
      .get('input').type('Bulbasaur');

    cy.get('form')
      .children('p')
      .should('not.exist');
  });

  it('should show the matching Pokemon if it\'s name is searched with any capitalization', () => {
    cy.get('input').type('BuLbAsAuR')
      .get('.search-button').click();
    
    cy.get('.pokemon-container > div')
      .find('figure')
      .find('a')
      .should('have.attr', 'href', '/bulbasaur')
      .find('img')
      .should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
      .should('be.visible')
      .siblings('figcaption')
      .contains('p', '#0001 | BULBASAUR');
  });

  it('should show a message if there are now matches', () => {
    cy.get('input').type('potato')
      .get('.search-button').click();

    cy.get('main')
      .contains('.no-match', 'POTATO fled! No Pokemon matched your search.');
  });
    
  it('should have the message disappear following a successful search', () => {
    cy.get('input').type('potato')
      .get('.search-button').click()
      .get('input').clear().type('Bulbasaur')
      .get('.search-button').click();
      
    cy.get('main')
      .children('.no-match')
      .should('not.exist');
  });
});