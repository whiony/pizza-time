describe('Form test', () => {
  it('Should open app on localhost', () => {
    cy.visit('/');
  });

  it('Should scroll to pizza catalog', () => {
    cy.get('button[data-scroll-to="section-catalog"]').click();
  });

  it('Can fill the form', () => {
    cy.get('.product__btn').first().click();

    cy.get('input[name="имя"]').type('Molly');
    cy.get('input[name="телефон"]').type('+380932281828');
    cy.get('input[name="адрес"]').type('ул. Комарова 2в');
    cy.get('select[name="оплата"]').select('оплата картой');

    cy.get('.form-send')
      .submit()
      .get('.popup-error')
      .should('have.class', 'is-active');
  });
});
