Cypress.Commands.add('login', () => {
    cy.fixture('login').then((login) => {
        cy.get('#user-name').type(login.valido.user)
        cy.get('#password').type(login.valido.password)
        cy.BtnLogin()
    })
})

Cypress.Commands.add('validoLogin', () => {
    cy.url().should('include', 'inventory.html')

    cy.get('.inventory_list').should('be.visible')

    cy.get('.inventory_item')
    .should('exist')
    .and('have.length.greaterThan', 0)
})

Cypress.Commands.add('loginInvalido', () => {
    cy.fixture('login').then((login) => {
        cy.get('#user-name').type(login.invalido.user)
        cy.get('#password').type(login.invalido.password)
        cy.BtnLogin()
    })
})

Cypress.Commands.add('validoMsgError', () => {
    cy.get('[data-test="error"]')
    .contains("Epic sadface: Username and password do not match any user in this service")
})

Cypress.Commands.add('validarNaoRedirecionamento', () => {
    cy.url().should('include', 'saucedemo.com')
})

Cypress.Commands.add('BtnLogin', () => {
        cy.get('#login-button').click()
})

Cypress.Commands.add('ValidoMsgDeErroCamposVazios', () => {
    cy.get('[data-test="error"]')
    .contains("Epic sadface: Username is required")
})