/// <reference types="cypress" />

describe("Cypress Testų Scenarijai", () => {
  // Prieš kiekvieną testą atidaro pagrindinį puslapį
  beforeEach(() => {
    // cy.visit("http://localhost:4343/index.html");
    cy.visit("/task14-cypress001/server/index.html");
  });

  describe("1. Pagrindinio puslapio testas", () => {
    it("Patikrina, ar banner yra matomas ir mygtuko paspaudimas pakeičia URL", () => {
      // Patikrina ar banner yra matomas ir ar turi pasveikinimo tekstą
      cy.contains(".banner", "Sveiki atvykę į Cypress testų puslapį!").should("be.visible");

      // Gauname alert pranešimą ir patikriname jo tekstą
      cy.on("window:alert", (alert) => {
        expect(alert).to.contains("Navigacija į /commands/actions atlikta!");
      });

      // Paspaudžiame mygtuką "užkrauti"
      cy.contains("button#action-type", "Užkrauti").should("be.visible").click();

      // Patikriname, ar URL įtraukia "/commands/actions"
      cy.url().should("include", "/commands/actions");
    });
  });

  describe("2. Prisijungimo formos testas", () => {
    it("Užpildo formą ir rodo sveikinimo žinutę bei profilio informaciją", () => {
      // Sukuriame kintamuosius vartotojo vardui ir slaptažodžiui
      const username = "bobmarley1985";
      const password = "123456";

      // Įrašome sukurtus kintamuosius
      cy.get("input#username").should("be.visible").type(username);
      cy.get("input#password")
        .should("be.visible")
        .type(password, { parseSpecialCharSequences: false });

      // Spaudžiame mygtuką "Prisijungti"
      cy.get("#login-button").should("be.visible").click();

      // Patikriname, ar rodoma sveikinimo žinutė
      cy.contains("#greeting", `Sveiki, ${username}`).should("be.visible");

      // Patikriname, ar rodomas studento profilis
      cy.contains("#profile h3", "Studento profilis");
    });
  });

  describe("3. Dinaminių elementų testas", () => {
    it('Patikrina, ar visi sąrašo elementai turi žodį "Item"', () => {
      // Parenkame sąrašą ir ciklu per jį pereiname
      cy.get("#item-list li").each(($item, index) => {
        cy.wrap($item)
          .should("be.visible")
          .should("have.text", `Item ${index + 1}`);
      });
    });
  });

  describe("4. API užklausų testas", () => {
    it("Stubina API užklausą ir rodo stubinimo duomenis", () => {
      // Paruoštas stubintas atsakymas iš data.json failo
      const stubData = require("../../server/data.json");

      // Interceptuojame GET užklausą į data.json
      cy.intercept("GET", "data.json", { statusCode: 200, body: stubData }).as("getData");

      // Paspaudžiame mygtuką "Gauti duomenis"
      cy.get("#fetch-data").should("be.visible").click();

      // Laukiame, kol užklausa bus atlikta
      cy.wait("@getData");

      // Patikriname, ar .data-container elemente rodomi stubinto atsakymo duomenys
      cy.contains(".data-container h3", "Stub data").should("be.visible");
    });
  });

  describe("5. Asinchroninės operacijos testas", () => {
    it("Patikrina, ar asinchroninė operacija baigiasi teisingai", () => {
      // Paspaudžiame mygtuką "Paleisti asinchroninę operaciją"
      cy.get("button#async-action").should("be.visible").click();

      // Patikriname ar iškart po paspaudimo rodomas pranešimas 'Operacija prasidėjo...'
      cy.contains("#async-result", "Operacija prasidėjo...").should("be.visible");

      // Laukiame, kol asinchroninė operacija baigsis (naudojame šiek tiek ilgesnį timeout), patikriname ar rodomas pranešimas 'Asinchroninė operacija baigta!'
      cy.wait(3500);
      cy.contains("#async-result", "Asinchroninė operacija baigta!").should("be.visible");
    });
  });

  describe("6. Hover efekto testas", () => {
    it("Rodo tooltip, kai užvedama pele ant hover-box", () => {
      // Iš pradžių tooltip neturėtų būti matomas
      cy.get("#tooltip").should("exist").should("not.be.visible");

      // Simuliuojame pelės užvedimą ant elemento ir patikriname ar rodomas pranešimas 'Papildoma informacija'
      cy.get("#hover-box").should('be.visible').trigger("mouseover");
      cy.contains("#tooltip", "Papildoma informacija").should("be.visible");

      // Simuliuojame pelės nuvedimą nuo elemento ir patikriname ar tooltip jau nėra matomas
      cy.get("#hover-box").should('be.visible').trigger("mouseout");
      cy.contains("#tooltip", "Papildoma informacija").should("not.be.visible");
    });
  });
});
