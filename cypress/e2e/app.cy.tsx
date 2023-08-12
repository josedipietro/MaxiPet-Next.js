describe('ShoppingCart', () => {
  it('should load home page with empty shopping cart', () => {
    cy.visit('http://localhost:3000');

    cy.get('#ShoppingCartButton').click();

    cy.contains('Aun no has agregado productos').should('exist');
  });

  it('should load add a product to cart', () => {
    cy.visit('http://localhost:3000');

    cy.scrollTo(0, 1500);

    cy.get('.add-to-cart-button').first().click();

    cy.scrollTo(0, -1500);

    cy.get('#ShoppingCartButton').click();

    cy.contains('Aun no has agregado productos').should('not.exist');
  });
});

export {};
