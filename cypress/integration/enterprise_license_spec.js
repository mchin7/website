describe("Test the enterprise license form", () => {
  it.only("Fills out the form data", () => {
    cy.visit("/enterprise-license");
    cy.findByLabelText(/first name/i)
      .click()
      .type("Kumquat");
    cy.findByLabelText(/last name/i)
      .click()
      .type("User");
    cy.findByLabelText(/email/i).click().type("kumquatuser@gitpod.io");
    cy.findByLabelText(/company/i)
      .click()
      .type("gitpod.io");
    cy.findByLabelText("country").select("Pakistan");
    cy.findByLabelText(/noofdevelopers/i).select("1-10");
    cy.findByLabelText(/how can we help?/i)
      .click()
      .type("Gitpod is Awesome!");
    cy.findByRole("button", { name: /install/i }).click();
  });
});
