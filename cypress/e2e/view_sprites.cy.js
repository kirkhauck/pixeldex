describe('Visit Sprite Page', () => {
  beforeEach('Intercept and stub main page', () => {
    cy.visitHome()
  });

  it('Should visit a Pokemon\'s sprite page when it is clicked', () => {
    cy.visitBulbasaur()
    .url().should('eq', 'http://localhost:3000/bulbasaur');
  });
  
  it('Should visit another Pokemon\'s sprite page when it is clicked', () => {
    cy.visitCharmander()
    .url().should('eq', 'http://localhost:3000/charmander');
  });
  
  it('Should be able to navigate between the home page and sprite page with browser history', () => {
    cy.visitBulbasaur()
    .url().should('eq', 'http://localhost:3000/bulbasaur');
    
    cy.go('back')
    .url().should('eq', 'http://localhost:3000/');
    
    cy.go('forward')
    .url().should('eq', 'http://localhost:3000/bulbasaur');
  });

  it('Should have a header with a title, subtitle, pokeball logo, and Home button', () => {
    cy.visitBulbasaur()

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

  it('Should navigate to the home page when the Home button is clicked', () => {
    cy.visitBulbasaur()
      .get('.home-button').click()
      .url().should('eq', 'http://localhost:3000/');
    
    cy.get('.pokemon-container')
      .contains('h2', 'Click a Pokemon to view its pixel art!');

    cy.get('.pokemon-container > div')
      .children().should('have.length', 20);
  });
});