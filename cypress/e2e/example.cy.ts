// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    // Listen to GET to /products
    cy.intercept('GET', '/products').as('getProducts')

    // Visit the page that makes the request
    cy.visit('/')

    // Wait for the request to /products to finish
    cy.wait('@getProducts')

    // Confirm the request is finished and products are rendered
    cy.get('.product').should('have.length', 20)
  })
})
