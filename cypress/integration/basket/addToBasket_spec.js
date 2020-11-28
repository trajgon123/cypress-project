/// <reference types="cypress" />
import { preBasket } from './preBasketActions'
describe(('testy pridavani do kosiku'), () => {

    it.skip(('addToBasketFromHomePageCarousel'), () => {
        cy.loginDefaulUser()
        cy.get('#recommended-to-buy-carousel').scrollIntoView().should('be.visible')
        cy.get('#recommended-to-buy-carousel button.btn-buy').first().click()
        preBasket("gobasket")
    });

    it(('addToBasketFromProductDetail'), () => {
        cy.getProductContentPage()
        //z detailu produktu zjisti kod produktu pro nasledne overeni
        cy.get('.our-code .data-code').then(($codeElement) => {
            var productDetailProductCode = $codeElement.text()
            cy.get('.pd-price-delivery .btn.btn-buy').click()
            preBasket("gobasket")
            cy.url().should('contain', 'kosik')
            //overeni kodu produktu v kosiku
            cy.get('.product-code').then(($codeEl) => {
                var basketProductCode = $codeEl.text()
                expect(productDetailProductCode).to.equal(basketProductCode)
            })

        })
    })

    it(('addToBasketFromCategoryContent'), () => {
        cy.getCategoryContentPage()
        //z vypisu produktu zjisti kod produktu pro nasledne overeni
        cy.get('.new-tile').first().find('.data-code').then(($code) => {
            var categoryContentCode = $code.text()

            cy.get('.new-tile .btn.btn-buy').first().click()
            preBasket("gobasket")
            //overeni kodu produktu v kosiku
            cy.get('.product-code').then(($codeEl) => {
                var basketProductCode = $codeEl.text()
                expect(categoryContentCode).to.equal(basketProductCode)
            })
        })
    })






})