export class HomePage {
  visit = () => {
    cy.visit('/');
  };

  getChooseButton = () => {
    return cy.get('button[data-scroll-to="section-catalog"]');
  };

  getFilterButton = (filter) => {
    return cy.get(`button[data-filter="${filter}"]`);
  };

  getCatalogItems = () => {
    return cy.get('*div.catalog__item');
  };

  getFilteredPizzaItems = (filter) => {
    return cy.get(`*div[data-category="${filter}"]`);
  };

  getFirstPizzaForm = () => {
    return cy.get('.product__btn').first();
  };

  getNameField = () => {
    return cy.get('input[name="имя"]');
  };

  getPhoneField = () => {
    return cy.get('input[name="телефон"]');
  };

  getAddressField = () => {
    return cy.get('input[name="адрес"]');
  };

  getPayMethod = () => {
    return cy.get('select[name="оплата"]');
  };

  getSubmitButton = () => {
    return cy.get('.form-send');
  };

  getErrorMessage = () => {
    return cy.get('.popup-error');
  };

  getCloseErrorButton = () => {
    return cy.get('.popup-error .popup__btn-close').first();
  };
}
