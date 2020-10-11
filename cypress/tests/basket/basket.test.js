/// <reference types="cypress" />
import {preBasket} from'./preBasketActions'
describe(('testy kosiku'), () => {

  

    beforeEach(() => {

    })





    it(('addToBasketFromHomePageCarousel'), () => {
        cy.loginDefaulUser()
        cy.get('#recommended-to-buy-carousel').scrollIntoView().should('be.visible')
        cy.get('#recommended-to-buy-carousel button.btn-buy').first().click()
        preBasket('gobasket')
    });








})