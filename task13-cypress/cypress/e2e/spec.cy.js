/// <reference types="cypress" />

describe("template spec", () => {
  // it("passes", () => {
  //   cy.visit("https://example.cypress.io");
  // });

  // it("Load login page", () => {
  //   cy.visit("https://www.saucedemo.com/");

  //   cy.contains("div", "Swag Labs").should('be.visible');
  //   cy.contains('h4', 'Accepted usernames').should('be.visible');
  // });

  it("Logins with valid data", () => {
    cy.visit("https://www.saucedemo.com/");

    const username = "standard_user";
    const password = "secret_sauce";

    cy.get("#login_button_container input#user-name").type(username);
    cy.get("#login_button_container input#password").type(password);
    cy.get('input[data-test="login-button"]').click();

    cy.get('[data-test="title"]').contains("Products", { matchCase: true }).should("be.visible");
  });
});
