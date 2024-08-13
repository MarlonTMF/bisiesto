describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });

  it("Muestra el resultado de la multiplicación al usuario", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    cy.get("#multiplicar-button").click();
    cy.get("#resultado-div").should("contain", "Resultado de la multiplicación: 20");
  });
});
