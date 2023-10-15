describe('MyComponent E2E Test', () => {
  const CHAR_LENGTH = 10;

  it('should have the correct page title', () => {
    // Visit the page you want to test
    cy.visit(`/${cy.generateRandomString(CHAR_LENGTH)}`);

    // Get the page title and assert its content
    cy.title().should('eq', 'Error 404 - Page Not Found');
  });

  it('should display the correct content', () => {
    // Visit the page containing the component
    cy.visit(`/${cy.generateRandomString(CHAR_LENGTH)}`);

    // Check if the logo image is present and has the correct attributes
    cy.get('img.scale')
      .should('have.attr', 'alt', 'Logo')
      .and('have.attr', 'src', 'assets/images/logo.png')
      .and('have.attr', 'width', '50')
      .and('have.attr', 'height', '50');

    // Check if the title elements have the correct text content
    cy.get('h1.title').should('have.text', '44');
    cy.get('h1.title-0').should('have.text', '0');

    // Check if the "page_not_found_message" text is present
    cy.get('h4.subtitle').should(
      'have.text',
      'Oops the page you are looking for does not exist.'
    );

    // Check if the "go_home" button is present and has the correct text
    cy.get('.btn.btn-primary.home-btn.btn-lg')
      .should('have.text', 'Go Home')
      .should('have.attr', 'href', '/'); // Replace with the correct href value

    // You can add more assertions if needed
  });
});
