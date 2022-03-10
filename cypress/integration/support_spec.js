describe("Test the support contact form", () => {
  it("Fills out the form data", () => {
    cy.visit("/contact/support");
    cy.wait(100);
    cy.findByText(/billing/i).click();
    cy.findByLabelText(/name/i).click().type("Gitpod User");
    cy.findByLabelText(/mail/i).click().type("gitpoduser@gitpod.io");
    cy.findByLabelText(/message/i)
      .click()
      .type("Gitpod is Awesome!");
    cy.findByTestId("consent").click();
    cy.findByRole("button", { name: /send/i }).click();
  });
});
