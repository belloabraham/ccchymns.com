describe('Auth Component Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form with correct elements', () => {
    // Check if the login title is visible
    cy.get('[data-testid=login-title]')
      .should('be.visible')
      .and('have.text', 'For authorized personnel login only');

    // Check if the email label is visible
    cy.get('[data-testid=email-label]')
      .should('be.visible')
      .and('have.text', 'Email');

    // Check if the app logo is visible
    cy.get('[data-testid=app-logo]')
      .and('have.attr', 'src', 'assets/images/logo.png')
      .and('have.attr', 'width', '80')
      .and('have.attr', 'height', '75');

    // Check if the email input is visible
    cy.get('[data-testid=email-input]')
      .should('be.visible')
      .and('have.text', '');

    // Check if the button have text Login
    cy.get('[data-testid=email-submit-button]')
      .should('be.visible')
      .and('have.text', 'Login');

    // Check if the button have ng-mat-raised-button attr
    cy.get('[data-testid=email-submit-button]')
      .should('be.visible')
      .and('have.attr', 'ng-mat-raised-button');

    // Check if the button have ng-mat-raised-button attr
    cy.get('[data-testid=email-input-feedback]').should('not.exist');

    // Click the email submit button
    cy.get('[data-testid=email-submit-button]').click();

    // Check if the email input feedback becomes visible after the button click
    cy.get('[data-testid=email-input-feedback]').should('be.visible');

    cy.get('[data-testid=email-input-feedback]').should(
      'have.text',
      'Enter a valid email address'
    );
  });
});
