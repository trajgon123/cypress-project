/// <reference types="cypress" />
describe('Login test', () => {
    const login = Cypress.env('testUser').login
    const password = Cypress.env('testUser').password
    const wrongPassword = "Heslo"
    const wrongLogin = "solote"

    beforeEach(() => {
        cy.visit('https://www.czc.cz/login')
        cy.setCookie('foo', 'bar')
    })

    it("succes test", () => {
        //prihlaseni uzivatele
        cy.login(login, password)
        //spravna url
        debugger
        cy.url().should('not.include', "login")
        //uzivatel je prihlasen
        cy.get('#logged-user').contains(login)

    })

    it("wrong login", () => {
        //prihlaseni uzivatele
        cy.login(wrongLogin, password)
        //spravna url
        cy.url().should('include', "login")
        //ukazuje se chybova hlaska
        cy.get('.frm__msg-name').should('be.visible')
        //uzivatel neni prihlasen
        cy.get('#logged-user').should('not.be.visible')
    })

    it("wrong password", () => {
        //prihlaseni uzivatele
        cy.login(login, wrongPassword)
        //spravna url
        cy.url().should('include', "login")
        //ukazuje se chybova hlaska
        cy.get('.frm__msg-password').should('be.visible')
        //uzivatel neni prihlasen
        cy.get('#logged-user').should('not.be.visible')
    })


    /*
     it("succes FAST LOGIN test", () => {
     //prihlaseni uzivatele
     cy.fastLogin(login, password)
     //spravna url
     cy.visit('https://www.czc.cz/')
     cy.url().should('not.include',"login")
     //uzivatel je prihlasen
     cy.get('#logged-user').contains(login)

    })*/
})