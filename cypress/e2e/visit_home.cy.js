describe('Visit Home Page', () => {
  beforeEach('ntercept and visit homepage', () => {
    cy.loadPage();
  })

  it('should have a header with a title, subtitle, pokeball logo, and Home button', () => {
    cy.get('header')
      .get('.title-logo')
      .should('have.attr', 'src', '/static/media/title-logo.4eb791ae459a4d4e9f0f.png')
      .should('have.attr', 'alt', 'pixeldex title logo')
      .should('be.visible');
      
    cy.get('header')
      .contains('p', 'Unleash the pixels, catch the nostalgia!');
    
    cy.get('header')
      .get('.pokeball-logo')
      .should('have.attr', 'src', '/static/media/pokeball-logo.178c73ab034c28222c35.png')
      .should('have.attr', 'alt', 'pixelated pokeball logo');
      
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
});