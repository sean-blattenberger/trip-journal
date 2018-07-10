describe("Travel Card Tests", () => {
  it("", () => {
    cy.visit("/");
    cy.get('.navbar-fixed').should('be.visible')
    cy.get('.card').should('have.length.gt', 1)
  });
});
