describe('Visit Sprite Page', () => {
  beforeEach('Intercept and stub main page', () => {
    cy.visitHome()
  });

  it('Should visit a Pokemon\'s sprite page when it is clicked', () => {
    cy.get('.pokemon-container > div > :nth-child(1)').click()
      .url().should('eq', 'http://localhost:3000/bulbasaur')
  });

  it('Should have a header with a title, subtitle, pokeball logo, and Home button', () => {
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
});