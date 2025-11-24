import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/LoginPage";

const loginPage = new LoginPage();

Given('que realizo login no sistema', () => {
  loginPage.acessarSite();
  loginPage.fillLogin("standard_user");
  loginPage.fillPassword("secret_sauce");
  loginPage.confirmLogin();

  cy.url().should("include", "/inventory.html"); // garante DOM correto
});
