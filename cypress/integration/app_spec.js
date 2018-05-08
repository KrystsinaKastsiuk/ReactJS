describe('The Home Page', () => {
  beforeEach( () => {
    cy.exec('npm run start');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });
});
