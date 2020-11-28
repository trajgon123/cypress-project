/// <reference types="cypress" />
const preBasketActions = {
    GOBASKET: 'gobasket',
    CONTINUESHOPPING: 'continueshopping'
}
  
  export const preBasket = (actionName) => {
    switch(actionName){
        case preBasketActions.GOBASKET:
            cy.get('.buttons > .btn-purchase').click()
            break
        case preBasketActions.CONTINUESHOPPING:
            cy.get('.buttons > .btn-signal').click()
            break
        default:
            console.log('Sorry! inserted valu- ${actionName}, is not defined pre-basket action.')
    }

}