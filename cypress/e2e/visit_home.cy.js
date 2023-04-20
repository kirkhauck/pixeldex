describe('Visit Home Page', () => {
  beforeEach('intercept and stub homepage', () => {
    cy.loadPage();
  })

  it('should have a header with a title, subtitle, pokeball logo, and Home button', () => {
    cy.get('header')
      .find('.title-logo')
      .should('have.attr', 'src', '/static/media/title-logo.4eb791ae459a4d4e9f0f.png')
      .should('have.attr', 'alt', 'pixeldex title logo')
      .should('be.visible');
      
      cy.get('header')
      .contains('p', 'Unleash the pixels, catch the nostalgia!');
      
      cy.get('header')
      .find('.pokeball-logo')
      .should('have.attr', 'src', '/static/media/pokeball-logo.178c73ab034c28222c35.png')
      .should('have.attr', 'alt', 'pixelated pokeball logo')
      .should('be.visible');
      
    cy.get('header')
    .contains('button', 'HOME');
  });

  it('should have a from with an empty text input and search button', () => {
    cy.get('form')
      .get('input')
      .should('have.attr', 'type', 'text')
      .should('have.value', '');

    cy.get('form')
      .get('button')
      .contains('SEARCH');
  });

  it('should have 20 pokemon components', () => {
    cy.get('.pokemon-container')
      .children().should('have.length', 20)

    cy.get('.pokemon-container').children().first()
      .contains('a')
      .should('have.attr', 'href', '/bulbasaur')
      .find('img')
      .should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
      .should('be.visible')
      .siblings('figcaption')
      .contains('p', '1 | bulbasaur')
      
      cy.get('.pokemon-container').children().last()
      .contains('a')
      .should('have.attr', 'href', '/raticate')
      .find('img')
      .should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png')
      .should('be.visible')
      .siblings('figcaption')
      .contains('p', '20 | raticate')
  });
});

describe('Visit Homepage with Failed Network Request', () => {
  beforeEach('intercept with failed request', () => {
    cy.loadSadPage();
  });

  it('Show an error when there is a bad network response', () => {
    cy.get('.error-message')
      .contains('h1', 'Wild ERROR Appeared!');

    cy.get('.error-message')
      .contains('p', 'Try again or come back later.');
  });
});