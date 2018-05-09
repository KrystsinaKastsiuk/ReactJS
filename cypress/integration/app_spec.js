describe('The Home Page', () => {
  beforeEach(() => {
    cy.exec('npm run start', { failOnNonZeroExit: false });
  });

  it('successfully loads', () => {
    cy.visit('/');
  });
});
