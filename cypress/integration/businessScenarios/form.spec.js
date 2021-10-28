import { HomePage } from '../../pageObjects/homePage';

describe('Form test', () => {
  const homePage = new HomePage();

  it('Should scroll to pizza catalog', () => {
    homePage.visit();
    homePage.getChooseButton().click();
  });

  it('Should filtered the pizza', () => {
    homePage.visit();

    const filterTypes = ['mushrooms', 'meat', 'cheese'];
    for (let filterType of filterTypes) {
      homePage.getFilterButton(filterType).click();
      homePage.getFilteredPizzaItems(filterType).should('be.visible');
      homePage.getCatalogItems().each((elem) => {
        cy.wrap(elem).should('have.attr', 'data-category', filterType);
      });
    }

    homePage.getFilterButton('all').click();
    homePage.getCatalogItems().should('be.visible');
  });

  it('Can fill the form', () => {
    homePage.visit();
    homePage.getFirstPizzaForm().click();

    homePage.getNameField().type('Diluc');
    homePage.getPhoneField().type('+380932281828');
    homePage.getAddressField().type('ул. Комарова 2в');
    homePage.getPayMethod().select('оплата картой');

    homePage.getSubmitButton().submit();
    homePage
      .getErrorMessage()
      .should('have.class', 'is-active')
      .and('be.visible');
    homePage.getCloseErrorButton().click();
  });
});
