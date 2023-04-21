Cypress.Commands.add('loadPage', () => {
  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=1008', {
    fixture: 'all_pokemon_sample',
  })
  .visit('http://localhost:3000/')
});

Cypress.Commands.add('loadSadPage', () => {
  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=1008', {
    status: 404,
  })
  .visit('http://localhost:3000/')
});