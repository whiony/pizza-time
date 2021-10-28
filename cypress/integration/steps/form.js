import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../../pageObjects/homePage';

const homePage = new HomePage();

When('I visit the landing page', () => {
  homePage.visit();
});
Then('I should see choose button', () => {
  homePage.getChooseButton().should('be.visible');
});

When('I click on the button "Выбрать"', () => {
  homePage.getChooseButton().click();
});
Then('I scrolled to the catalog of pizza', () => {
  cy.window().then((win) => {
    expect(win.scrollY).to.be.closeTo(400, 100);
  });
});

Given('I go to', (url) => {
  cy.visit(url);
});
